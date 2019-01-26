<template>
  <div>
    <link rel="stylesheet" href="static/css/style.css" type="text/css" media="all"/>
    <!-- Style-CSS -->
    <link rel="stylesheet" href="static/css/fontawesome-all.css">
    <!-- bg effect -->
    <div id="bg">
      <canvas></canvas>
      <canvas></canvas>
      <canvas></canvas>
    </div>
    <!-- //bg effect -->
    <!-- title -->
    <h1>Effect Login Form</h1>
    <!-- //title -->
    <!-- content -->
    <div class="sub-main-w3">
      <form action="#" method="post">
        <h2>Login Now
          <i class="fas fa-level-down-alt"></i>
        </h2>
        <div class="form-style-agile">
          <label>
            <i class="fas fa-user"></i>
            Username
          </label>
          <input placeholder="Username" v-model="loginInfoVo.username" type="text" r>
        </div>
        <div class="form-style-agile">
          <label>
            <i class="fas fa-unlock-alt"></i>
            Password
          </label>
          <input placeholder="Password" v-model="loginInfoVo.password" type="password">
        </div>
        <!-- checkbox -->
        <div class="wthree-text">
          <ul>
            <!--<li>
            <a :href="registpath">regist</a>
          </li>-->
            <li>
              <router-link :to="path">regist</router-link>
            </li>
          </ul>
        </div>
        <!-- //checkbox -->
        <el-button type="success" v-on:click="login" >Log In</el-button>
      </form>
    </div>
    <!-- //content -->

    <!-- copyright -->
    <div class="footer">
      <p>Copyright &copy; 2018.Company name All rights reserved.</p>
    </div>
  </div>
</template>
<!-- Jquery -->
<script src="static/js/jquery-3.3.1.min.js"></script>
<!-- //Jquery -->

<!-- effect js -->
<script src="static/js/canva_moving_effect.js"></script>
<!-- //effect js -->
<script>
  addEventListener("load", function () {
    setTimeout(hideURLbar, 0);
  }, false);

  function hideURLbar() {
    window.scrollTo(0, 1);
  }
</script>
<script>
  export default {
    name: 'BlogLogin',
    // blogHeader、blogFooter组件给申明到components里面然后在template里面使用
    data() {
      return {
        loginInfoVo: {username: '', password: ''},
        responseResult: [],
        registpath:"static/regist-vue-demo.html",
        path: '/regist'
      }
    },
    methods: {
      login() {
        this.$axios.get('/login/logininfo?username='+this.loginInfoVo.username+'&password='+this.loginInfoVo.password)
          .then(successResponse => {
            this.responseResult = JSON.stringify(successResponse.data)
            if (successResponse.data.code === 200) {
              this.$router.replace({name: 'BlogIndex',params:{username:this.loginInfoVo.username}})
            }else {
              this.$alert(successResponse.data.message)
            }
          })
          .catch(failResponse => {
          })
      }
    }
  }
</script>

<!-- Meta tag Keywords -->
