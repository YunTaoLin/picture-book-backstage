<template>
  <div class="new">
    <h2>新增商品</h2>
    <div class="cancel">
     <a href="javascirpt:;" @click="cancel"> <i class="fa fa-times" aria-hidden="true"></i></a>
    </div>
    <form >
      <label for="title">
        商品名稱：
        <input type="text" id="title">
      </label>
      <label for="img">
        商品圖片：
        <input type="text" id="img">
      </label>
      <label for="ori_price">
        商品原價：
        <input type="number" id="ori_price">
      </label>
      <label for="sale_price">
        優惠價格：
        <input type="number" id="sale_price">
      </label>
      <label for="info">
        商品資訊：
       <textarea name="" id="" cols="30" rows="8" id="info"></textarea>
      </label>
      <a href="javascript:;">新增</a>
    </form>

  </div>
</template>

<script>
export default {
  methods:{
    cancel(){
      this.$emit('cancel')
    }
  }
}
</script>

<style lang="scss" scoped>
  .new{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 450px;
    height: 600px;
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
      input,textarea{
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