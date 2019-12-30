<template>
  <div class="commodity">
    <div class="container-fluid " >
      <div class="title">
        <h1>商品列表</h1>
        <a href="#" class="btn_new" @click="show = true">新增商品</a>
        <select v-model="queryClassify">
          <option value="4">全部</option>
          <option value="-1">當季精選</option>
          <option value="0">0-6歲幼兒繪本</option>
          <option value="1">6-12歲兒童繪本</option>
          <option value="2">12歲up青少年</option>
          <option value="3">其他周邊</option>
        </select>
        <div class="search_bar ml-5">
          <input type="text" placeholder="搜尋商品編號或名稱" v-model.trim="queryID">
          <button><i class="fa fa-search" aria-hidden="true"></i></button>
        </div>
        <p class="ml-5">搜尋結果數量：{{filterList.length}}</p>
      </div>
      
      <div class="list">
          <table class="table" >
            <thead>
              <tr>
                <th>分類</th>
                <th>縮圖</th>
                <th>商品名稱</th>
                <th>商品資訊</th>
                <th>優惠價格/原始價格</th>
                <th>銷售數量</th>
                <th>追蹤人數</th>
                <th>最後更新時間</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in filterList" :key="item.title">
                <th>{{classify(item.classify)}}</th>
                <th>
                  <img :src="item.img" alt="縮圖">
                </th>
                <th>{{item.title}}</th>
                <th :title="item.info" class="info"><p>{{item.info}}</p></th>
                <th>{{item.sale_price}}元/{{item.ori_price}}元</th>
                <th>{{item.sale}}本</th>
                <th>{{item.like.length}}人</th>
                <th>{{new Date(item.last_time).toLocaleString()}}</th>
                <th>
                  <a href="javascript:;" @click="edit(item)"><i class="fa fa-pencil" aria-hidden="true"></i>編輯</a>
                  <a href="javascript:;"><i class="fa fa-trash" aria-hidden="true"></i>刪除</a>
                </th>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
    <newCommodity v-if="show" @cancel="show = false"/>
    <editCommodity v-if="editing._id" @cancel="editing = {}" :commodity="editing" />
  </div>
</template>

<script>
import newCommodity from '../components/NewCommodity.vue'
import editCommodity from '../components/EditCommodity.vue'
export default {
  components:{
    newCommodity,editCommodity
  },
  data(){
    return {
      show: false,
      Commodity: this.$store.state.commodity,
      editing:{},
      queryClassify:4,
      queryID:''
    }
  },
  computed:{
    filterList(){
      let firstFilter =[]
      if(this.queryClassify==4){
        firstFilter = this.Commodity
      }else{
      firstFilter = this.Commodity.filter(item=>{
          return parseInt(item.classify) === parseInt(this.queryClassify)
        })
      }
      if(this.queryID == ''){
        return  firstFilter
      }else{
        return firstFilter.filter(item=>{
          return item._id === this.queryID || item.title.indexOf(this.queryID) !== -1
        })
      }
    }
  },
  methods:{
    edit(item){
      this.editing = item
    },
    classify(type){
      type = parseInt(type)
      let classify;
      switch (type){
        case -1 : 
          classify= '當季精選繪本';
          break;
        case 0 : 
          classify= '0-6歲幼兒繪本';
          break;
        case 1 :
          classify= '6-12歲兒童繪本';
          break;
        case 2 :
          classify= '12歲up青少年'
          break;
        case 3:
          classify= '其他周邊'
      }
      return classify 
    },
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
    margin-left: 2em;
    padding: 4px 8px;
    font-weight: 700;
    option{
      padding: 4px 8px;
    }
  }
}
.btn_new{
  padding: 8px 12px;
  border: 1px solid green;
  background-color: green;
  text-decoration: none;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
}
.list{
  width: 100%;
  overflow: auto;
}
//設定表格高度
.table,thead,tbody{
    display:block;
    min-width: 1600px;
    overflow: auto;
}
thead, tbody tr {
    display:table;
    width:100%;
    table-layout:fixed;
}
thead {
    width: calc( 100% - 1em )
}
//標格列表
table{
  width:100%;
  min-width: 1200px;
  border-collapse:collapse;
  tr th:nth-of-type(1){width: 8%;}
  tr th:nth-of-type(2){width: 8%;}
  tr th:nth-of-type(3){width: 17%;}
  tr th:nth-of-type(4){width: 18%;}
  tr th:nth-of-type(5){width: 12%;}
  tr th:nth-of-type(6){width: 6%;}
  tr th:nth-of-type(7){width: 7%;}
  tr th:nth-of-type(8){width: 12%;}
  tr th:nth-of-type(9){width: 12%;}
  thead tr th{
    height: 42px;
    line-height: 42px;
    border-bottom: 2px solid #ccc;
  }
  tbody{
    height: 70vh;
    overflow: auto;
    tr:nth-of-type(odd){
      background-color: #f0f0f0;
    }
    img{
      height: 50px;
      width: 50px;
      padding: 2.5px 2.5px 0;
      object-fit: cover;
    }
    .info{
      // display: inline-block;
    }
    .info p{
      white-space: nowrap;
      width:300px;
      -webkit-line-clamp: 2; //行數
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
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
</style>