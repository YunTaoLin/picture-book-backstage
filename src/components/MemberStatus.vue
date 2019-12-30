<template>
  <div class="status">
    <h2>變更狀態</h2>
    <div class="cancel">
     <a href="javascirpt:;" @click="cancel"> <i class="fa fa-times" aria-hidden="true"></i></a>
    </div>
    <div class="info">
      <p>會員編號：{{member._id}}</p>
      <p>會員名稱：{{`${member.firstname} ${member.lastname}`}}</p>
      <p>登入信箱：{{member.email}}</p>
      <p>建立時間：{{new Date(member.create_time).toLocaleString('zh-TW')}}</p>
      <p>目前狀態：{{status(member.status)}}</p>
    </div>
    <form >
      <label for="status">
        修改狀態：
        <select id="status" v-model="memberStatus">
          <option value="0">正常使用</option>
          <option value="1">禁止貨到付款</option>
          <option value="2">封鎖中</option>
        </select>
      </label>
      <a href="javascript:;" @click="update">變更狀態</a>
    </form>

  </div>
</template>

<script>
export default {
  props:{
    member:Object
  },
  data(){
    return{
      memberStatus:this.member.status
    }
  },
  methods:{
    update(){
      this.$store.dispatch('a_updateMember',{
        status:this.memberStatus,
        member_id:this.member._id
      })
    },
    cancel(){
      this.$emit('cancel')
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
          status= '封鎖中'
      }
      return status 
    }
  }
}
</script>

<style lang="scss" scoped>
  .status{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 450px;
    height: 400px;
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
      select,option{
        width: 70%;
        text-align: center;
        text-align-last: center;
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