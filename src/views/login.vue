<template>
  <div id="login">
    <div id="left">
      <div id="slogan">
        <i class="el-icon-search slogan">&nbsp;&nbsp;&nbsp;&nbsp;记录你的生活</i><br>
        <i class="el-icon-plus slogan">&nbsp;&nbsp;&nbsp;&nbsp;记录你的想法</i><br>
        <i class="el-icon-picture-outline slogan">&nbsp;&nbsp;&nbsp;&nbsp;记录你的一切</i>
      </div>
    </div>
    <div id="right">
      <div id="logo">
        <img src="../../public/note-blue.png">
      </div>
      <h2>记录你的生活！</h2><br><br><br><br>
      <div id="login-component">
        <LoginComponent />
      </div>
    </div>
  </div>
</template>

<script>
import LoginComponent from '../components/loginComponent'

export default {
  name: 'Login',
  components: {
    LoginComponent: LoginComponent
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
#login {
  width: 100%;
  height: 100%;
  background-color: #f8f7f7;
}
#left {
  display: block;
  width: 70%;
  height: 100%;
  float: left;
  background-color: #1da1f2;
  background-image: url(../../public/background.jpg);
  background-repeat: no-repeat;
  background-position: -500px 100%;

  img {
    position: absolute;
    left: -2%;
    top: -50%;
    opacity: 0.3;
    height: 1500px;
    width: 1500px;
    z-index: 2;
  }

  #slogan {
    margin: 180px auto;
    margin-left: 60%;

    .slogan {
      font-size: 3em;
      color: #398dee;
      display: block;
      margin: 20px;
      text-align: left;
    }
  }
}

#right {
  display: block;
  width: 28%;
  height: 100%;
  float: right;
  z-index: 10;

  #logo {
    width: 100px;
    height: 100px;
    margin: 50px auto 20px;

    img {
      width: 100px;
      height: 100px;
    }
  }
}

#loginComponent {
  width: 50%;
  margin: auto;
}
</style>
