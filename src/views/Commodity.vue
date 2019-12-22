<template>
  <div class="commodity">
    <div class="container-fluid " >
      <div class="title">
        <h1>商品列表</h1>
        <a href="#" class="btn_new" @click="show = true">新增商品</a>
      </div>
      
      <div class="list">
          <table class="table">
            <thead>
              <tr>
                <th>縮圖</th>
                <th>商品名稱</th>
                <th>價格</th>
                <th>銷售數量</th>
                <th>追蹤人數</th>
                <th>最後更新時間</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
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
      show: false
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
//標格列表
table{
  width: 100%;
  border-bottom: 2px solid #ccc;
  tr th:nth-of-type(1){width: 12%;}
  tr th:nth-of-type(2){width: 22%;}
  tr th:nth-of-type(3){width: 12%;}
  tr th:nth-of-type(4){width: 12%;}
  tr th:nth-of-type(5){width: 12%;}
  tr th:nth-of-type(6){width: 15%;}
  tr th:nth-of-type(7){width: 15%;}
  thead{
    height: 42px;
    line-height: 42px;
    border-bottom: 2px solid #ccc;
  }
}
</style>