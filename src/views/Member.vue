<template>
  <div class="commodity">
    <div class="container-fluid " >
      <div class="title">
        <h1>會員列表</h1>
        <div class="search_bar ml-2">
          <input type="text" placeholder="搜尋名字or編號" v-model.trim="queryID">
          <button><i class="fa fa-search" aria-hidden="true"></i></button>
        </div>
      </div>
      
      <div class="list">
          <table class="table" >
            <thead>
              <tr>
                <th>會員編號</th>
                <th>名稱</th>
                <th>登入信箱</th>
                <th>性別</th>
                <th>電話</th>
                <th>住址</th>
                <th>帳號狀態</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in filterList" :key="item._id">
                <th>{{item._id}}</th>
                <th>{{`${item.firstname} ${item.lastname}`}}</th>
                <th>{{item.email}}</th>
                <th>{{gender(item.gender)}}</th>
                <th>{{item.tel}}</th>
                <th>{{item.address}}</th>
                <th>{{status(item.status)}}</th>
                <th>
                  <a href="javascript:;" @click="edit(item)"><i class="fa fa-pencil" aria-hidden="true" ></i>變更狀態</a>
                  <a href="javascript:;"><i class="fa fa-trash" aria-hidden="true"></i>刪除</a>
                </th>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
    <memberStatus v-if="editing._id" @cancel="editing = {}" :member="editing"/>
  </div>
</template>

<script>
import memberStatus from '../components/MemberStatus.vue'
export default {
  components:{
    memberStatus
  },
  data(){
    return {
      members:this.$store.state.user,
      queryID:'',
      editing:{}
    }
  },
  computed:{
    filterList(){
      if(this.queryID == ''){
        return this.members
      }else{
        return this.members.filter(item=>{
          return item.firstname.indexOf(this.queryID) != -1 || item.lastname.indexOf(this.queryID) != -1 || item._id.indexOf(this.queryID) != -1
        })
      }
    }
  },
  methods:{
    gender(type){
      type = parseInt(type)
      let gender;
      switch (type){
        case -1 : 
          gender= '保密';
          break;
        case 1 :
          gender= '男';
          break;
        case 2 :
          gender= '女'
      }
      return gender 
    },
    status(type){
      type = parseInt(type)
      let status;
      switch (type){
        case 0 : 
          status= '正常使用';
          break;
        case 1 :
          status= '禁止貨到付款';
          break;
        case 2 :
          status= '帳號封鎖中'
      }
      return status 
    },
    edit(item){
      this.editing = item
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
  tr th:nth-of-type(1){width: 13%;}
  tr th:nth-of-type(2){width: 12%;}
  tr th:nth-of-type(3){width: 15%;}
  tr th:nth-of-type(4){width: 5%;}
  tr th:nth-of-type(5){width: 15%;}
  tr th:nth-of-type(6){width: 20%;}
  tr th:nth-of-type(8){width: 10%;}
  tr th:nth-of-type(8){width: 10%;}
  thead tr th{
    height: 42px;
    line-height: 42px;
    border-bottom: 2px solid #ccc;
  }
  tbody{
    line-height: 3;
    tr:nth-of-type(odd){
      background-color: #f0f0f0;
    }
    img{
      height: 50px;
      width: 50px;
      padding: 2.5px 2.5px 0;
      object-fit: cover;
    }
    .content{
      ul{
        margin-left: 2em;
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
    th:first-child{
      padding-left: 1em;
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
}
</style>