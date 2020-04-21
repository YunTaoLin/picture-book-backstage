<template>
  <div class="commodity">
    <div class="container-fluid " >
      <div class="title">
        <h1>訂單管理</h1>
        <select v-model="queryStatus">
          <option value="0">顯示未處理</option>
          <option value="1">顯示配送中</option>
          <option value="2">顯示已完成</option>
          <option value="3">顯示全部</option>
        </select>
        <div class="search_bar ml-5">
          <input type="text" placeholder="搜尋訂單編號" v-model.trim="queryID">
          <button><i class="fa fa-search" aria-hidden="true"></i></button>
        </div>
      </div>
      
      <div class="list">
          <table class="table" >
            <thead>
              <tr>
                <th>狀態</th>
                <th>訂單編號</th>
                <th>訂購人</th>
                <th>訂單內容</th>
                <th>配送地址</th>
                <th>聯絡電話</th>
                <th>總金額(含運費)</th>
                <th>建立時間</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in filterList" :key="item._id">
                <th :style="'color:'+statusColor(item.status)">{{status(item.status)}}</th>
                <th>{{item._id}} </th>
                <th>{{item.name}}<br> <span class="member_id"> {{`（${item.userId}）`}}</span></th>
                <th class="content">
                  <ul>
                    <li v-for="(content,index) in item.buy" :key="index">
                      {{query_commodity(content.id)}} X {{content.number}}
                    </li>
                  </ul>
                </th>
                <th :title="item.address"><p class="text-over">{{item.address}}</p></th>
                <th>{{item.tel}}</th>
                <th>{{item.total}}元</th>
                <th>{{new Date(item.create_time).toLocaleString()}}</th>
                <th>
                  <a href="javascript:;" @click="edit(item)"><i class="fa fa-pencil" aria-hidden="true" ></i>變更狀態</a>
                  <a href="javascript:;" @click='deleteHandler(item)'><i class="fa fa-trash" aria-hidden="true"></i>刪除</a>
                </th>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
    <orderStatus v-if="editing._id" @cancel="editing = {}" :order="editing"/>
  </div>
</template>

<script>
import orderStatus from '../components/OrderStatus.vue'
export default {
  components:{
    orderStatus
  },
  data(){
    return {
      show: true,
      order: this.$store.state.order,
      user: this.$store.state.user,
      commodity:this.$store.state.commodity,
      queryID:'',
      queryStatus:0,
      editing:{}
    }
  },
  computed:{
    filterList(){
      console.log('cpmputed啟動'+this.order)
      let newList=this.order
      //篩選狀態
      if(this.queryStatus==3){
          newList = this.order 
      }else{
        newList = this.order.filter(item=>{
        return item.status == this.queryStatus
        })
      }
      //篩選關鍵字
      let result
      if(!this.queryID){
        result = newList
      }else{
        result = newList.filter(item=>{
          return item._id.indexOf(this.queryID) != -1
        })
      }
      return result.reverse()
    }
  },
  methods:{
    status(type){
      type = parseInt(type)
      let status;
      switch (type){
        case 0 : 
          status= '尚未處理';
          break;
        case 1 :
          status= '配送中';
          break;
        case 2 :
          status= '已完成'
      }
      return status 
    },
    query_user(id){
      let theUser = this.user.filter((item)=>{
        return item._id == id
      })
      return theUser[0]
    },
    query_commodity(queryID){
      let theContent = this.$store.state.commodity.find(item=>{
        return item._id.indexOf(queryID) != -1
      })
      return theContent? theContent.title : '該商品已被移除'
    },
    pay(content,freight){
      var total =0;
      for(var i = 0 ; i < content.length ; i++){
        var price = this.query_commodity(content[i].id).sale_price
        var number = content[i].number
        total += (price*number)
      }
      return total+parseInt(freight)
    },
    statusColor(type){
      type = parseInt(type)
      let color;
      switch (type){
        case 0 : 
          color= 'red';
          break;
        case 1 :
          color= 'orange';
          break;
        case 2 :
          color= 'green'
      }
      return color
    },
    edit(item){
      this.editing = item
    },
    deleteHandler(item){
      if(confirm('是否確定要刪除該訂單資料')){
        var deleteID = item._id
          this.$store.dispatch('a_deleteOrder',{
            deleteID : deleteID
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.title{
  width: 100%;
  display: flex;
  align-items: center;
  h1{
    font-size: 32px;
    margin-right: 1em;
  }
  select{
    padding: 4px 8px;
    font-weight: 700;
    option{
      padding: 4px 8px;
    }
  }
  .search_bar{
    border-radius: 200px;
    padding: 4px 12px;
    border: 1px solid #666;
    input{
      outline: none;
      border: none;
    }
    button{
      border: none;
      outline: none;
      background-color: transparent;
      cursor: pointer;
    }
  }
}

.list{
  width: 100%;
  overflow: auto;
}
//標格列表
table{
  width:100%;
  min-width: 1200px;
  border-collapse:collapse;
  // border-bottom: 2px solid #ccc;
  tr th:nth-of-type(1){width: 7%;}
  tr th:nth-of-type(2){width: 10%;}
  tr th:nth-of-type(3){width: 10%;padding-left: 8px;}
  tr th:nth-of-type(4){width: 20%;}
  tr th:nth-of-type(5){width: 15%;}
  tr th:nth-of-type(6){width: 8%;}
  tr th:nth-of-type(7){width: 10%;}
  tr th:nth-of-type(8){width: 10%;}
  tr th:nth-of-type(9){width: 10%;}
  thead tr th{
    height: 42px;
    line-height: 42px;
    border-bottom: 2px solid #ccc;
  }
  tbody{
    tr{
      padding: 12px 0;
    }
    tr:nth-of-type(odd){
      background-color: #f0f0f0;
    }
    img{
      height: 50px;
      width: 50px;
      padding: 2.5px 2.5px 0;
      object-fit: cover;
    }
    .member_id{
      font-size: 12px;
      color: #aaa;
    }
    .content{
      ul{
        margin-right: 1em;
        text-align: left;
      }
    }
    a{
      margin:0 .5em;
      color: #666;
      text-decoration: none;
      transition: .3s;
      i{
        margin-right: 2px;
      }
      &:hover{
        color: #183c7a;
        font-weight: 700;
      }
    }
  }
}

.text-over{
  white-space: nowrap;
  width:200px;
  -webkit-line-clamp: 2; //行數
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 auto;
}
</style>