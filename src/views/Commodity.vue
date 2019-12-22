<template>
  <div class="commodity">
    <div class="container-fluid " >
      <div class="title">
        <h1>商品列表</h1>
        <a href="#" class="btn_new" @click="show = true">新增商品</a>
      </div>
      
      <div class="list">
          <table class="table" >
            <thead>
              <tr>
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
              <tr v-for="item in Commodity" :key="item.title">
                <th>
                  <img :src="item.img" alt="縮圖">
                </th>
                <th>{{item.title}}</th>
                <th :title="item.info" class="info"><p>{{item.info}}</p></th>
                <th>{{item.sale_price}}元/{{item.ori_price}}元</th>
                <th>{{item.sale}}本</th>
                <th>{{item.like.length}}人</th>
                <th>{{item.last_time}}</th>
                <th>
                  <a href="javascript:;"><i class="fa fa-pencil" aria-hidden="true"></i>編輯</a>
                  <a href="javascript:;"><i class="fa fa-trash" aria-hidden="true"></i>刪除</a>
                </th>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
    <newCommodity v-if="show" @cancel="show = false"/>
  </div>
</template>

<script>
import newCommodity from '../components/newCommodity.vue'
export default {
  components:{
    newCommodity
  },
  data(){
    return {
      show: false,
      Commodity: this.$store.state.commodity
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
//標格列表
table{
  width:100%;
  min-width: 1200px;
  border-collapse:collapse;
  // border-bottom: 2px solid #ccc;
  tr th:nth-of-type(1){width: 9%;}
  tr th:nth-of-type(2){width: 16%;}
  tr th:nth-of-type(3){width: 17%;}
  tr th:nth-of-type(4){width: 13%;}
  tr th:nth-of-type(5){width: 9%;}
  tr th:nth-of-type(6){width: 10%;}
  tr th:nth-of-type(7){width: 13%;}
  tr th:nth-of-type(8){width: 13%;}
  thead tr th{
    height: 42px;
    line-height: 42px;
    border-bottom: 2px solid #ccc;
  }
  tbody{
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
</style>