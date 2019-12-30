<template>
  <div class="new">
    <h2>編輯商品</h2>
     <p>商品編號：{{commodity._id}}</p>
    <div class="cancel">
     <a href="javascirpt:;" @click="cancel"> <i class="fa fa-times" aria-hidden="true"></i></a>
    </div>
    <form >
      <label for="title">
        商品名稱：
        <input type="text" id="title" v-model="editData.title">
      </label>
      <label for="img">
        年齡分類：
        <select name="" id="classify" v-model="editData.classify">
          <option value="-1">當季精選</option>
          <option value="0">0-6歲幼兒繪本</option>
          <option value="1">6-12歲兒童繪本</option>
          <option value="2">12歲up青少年</option>
          <option value="3">其他周邊</option>
        </select>
      </label>
      <label for="img">
        商品圖片：
        <input type="text" id="img" v-model="editData.img">
      </label>
      <label for="ori_price">
        商品原價：
        <input type="number" id="ori_price" v-model="editData.ori_price">
      </label>
      <label for="sale_price">
        優惠價格：
        <input type="number" id="sale_price" v-model="editData.sale_price">
      </label>
      <label for="info">
        商品資訊：
       <textarea name="" id="info" cols="30" rows="8" v-model="editData.info"></textarea>
      </label>
      <a href="javascript:;" @click="update">更新</a>
    </form>

  </div>
</template>

<script>
export default {
  props:{commodity:Object},
  data(){
    return {
      editData:{
        title:this.commodity.title,
        img:this.commodity.img,
        ori_price:this.commodity.ori_price,
        sale_price:this.commodity.sale_price,
        info:this.commodity.info,
        classify:this.commodity.classify
      }
    }
  },
  methods:{
    cancel(){
      this.$emit('cancel')
    },
    update(){
      this.$store.dispatch('a_updateCommodity',{
        data:this.editData,
        commodity_id:this.commodity._id
      })
      this.cancel()
    },
  }
}
</script>

<style lang="scss" scoped>
  .new{
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 555;
    transform: translate(-50%,-50%);
    width: 450px;
    height: 640px;
    background-color: #434957;   
    padding: 20px 40px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 3px 2px rgba(87, 87, 87, 0.2);
    color: #fefefe;
    h2{
      text-align: center;
      font-size: 28px;
    }
  }

  form{
    display:flex;
    flex-direction: column;
    font-size: 16px;
    line-height: 1.5;
    label{
      margin: 12px 0;
      display:flex;
      align-items: flex-start;
      input,textarea,select{
        width: 70%;
        padding: 4px;
        border-radius: 2px;
        border: none;
        background-color: #dfdfdf;
      }
    }
    a{
      color: #fff;
      padding: 8px 24px;
      display: inline-block;
      text-decoration: none;
      border: 1px solid #fff;
      border-radius: 2px;
      margin:1.5em 1em;
      text-align: center;
      // align-self: flex-start;
    }
  }
  .cancel{
    position: absolute;
    right: 0;
    top: 0;
    a{
      display: inline-block;
      font-size: 24px;
      padding: 12px 15px;
      color: #fefefe;
    }
  }
</style>