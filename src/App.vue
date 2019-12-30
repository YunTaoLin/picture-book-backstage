<template>
  <div id="app">
    <header class="header">
      <div class="logo">
        <img src="./assets/mylogo3.png" alt="logo">
      </div>
      <span class="header_title">後台管理系統</span>
      <div class="logout">
        <a href="javascript;">登出系統</a>
      </div>
    </header>
    <div class="myContainer">
      <div class="main">
        <div class="control_bar">
            <router-link to="/commodity">
              <div class="icon"><i class="fa fa-shopping-cart" aria-hidden="true"></i></div>
              <p>商品管理</p>
            </router-link>
            <router-link to="/order">
              <div class="icon"><i class="fa fa-list" aria-hidden="true"></i></div>
              <p>訂單管理</p>
            </router-link>
            <router-link to="member">
              <div class="icon"><i class="fa fa-user" aria-hidden="true"></i></div>
              <p>會員管理</p>
            </router-link>
          </div>
        <div class="view">
          <router-view/>
        </div>
      </div>
    </div>

    
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  beforeCreate(){
    this.$store.dispatch('a_getMember')
    this.$store.dispatch('a_getCommodity')
    this.$store.dispatch('a_getOrder')
  }
}
</script>


<style lang="scss" >
@import url('./assets/scss/_reset.scss');
$primary-color:#282D41;
$secondary-color:#847874;
$third-color:rgb(192, 192, 192);
$th4-color:rgb(255, 97, 11);
$special-color:#969494;
$eng-font: 'Oswald',
sans-serif;
$tw-font: '微軟正黑體';
*{
  font-size: 14px;
  font-family: $tw-font;
}
body,html{
  width: 100%;
  height: 100%;
}
  .header{
    width: 100%;
    box-sizing: border-box;
    height: 80px;
    background-color:#222;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 5vw 0 2vw;
    .logo{
      height: 80%;
      img{
        height: 100%;
        object-fit: cover;
      }
    }
    .logout{
      a{
        color: #fefefe;
        text-decoration: none;
        font-size: 16px;

      }
    }
    .header_title{
      color: #fefefe;
      font-size: 24px;
    }
  }

  .main{
    width: 100%;
    display: flex;
  }
  .control_bar{
    width: 150px;
    height: calc(100vh - 80px);
    background-color:#444;
    a{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 20%;
      width: 100%;
      color: #efefef;
      border-bottom: 1px solid rgba(170, 170, 170, 0.3);
      text-decoration: none;
      transition: .3s;
      &:hover{
        background-color:rgb(33, 38, 56);
      }
      i{
        font-size: 60px;
      }
      p{
        margin-bottom: 0;
        text-decoration: none;
        font-size: 18px;
      }
      
    }
  }
  .view{
    width: calc(100% - 150px);
    padding:4vh 2vw;
  }
.router-link-active{
  background-color:rgb(33, 38, 56);
}
  
</style>
