<template>
  <div class="login">
    <div class="intro">
      <h1 class="title">Spices</h1>
      <h2 class="subtitle">ALPHA</h2>
    </div>
    <form id="login" class="loginForm" @submit.prevent="authValidate">
      <div class="brand-content">
        <div><img src="~static/spice_logo.png" alt="Spice" class="brand"></div>
      </div>
      
      <v-text-field
        placeholder="Username"
        v-model = "user"
        height="20px"
        filled
        rounded
      ></v-text-field>

      <v-text-field
        placeholder="Password"
        v-model = "pass"
        height="20px"
        filled
        rounded
      ></v-text-field>

      <div class="field">
        <v-app class="control">
            <v-btn rounded color="error"><v-icon>arrow_forward</v-icon></v-btn>
        </v-app>
      </div>
    </form>
  </div> 
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'auth',
  data() {
    return {
      user: "",
      pass: ""
    }
  },
  methods:{
    async authValidate(e : Event) {
      
    } 
  }
})
</script>
<style lang="scss" scoped>
@import '~/assets/scss/index';

$brand-scale: 35px;
.login {
  display: grid;
  overflow: hidden;
  grid-template-columns: 60% 40%;
  width: 100vw;
  height: 100vh;
  .intro {
    text-align: right;
    padding: 100px 60px;
    color: #fff;
    background-color: color(cerberus-main);

    h2.subtitle{
      font-size: 20px;
    }
    .title{
      font-size: 50px;
    }
  }
  .loginForm{
    padding: 100px 30px;
    font-size: 18px;
    // .brand {
    //   display: flex;
    //   padding-bottom: 30px;
    //   span {
    //     font-size: 30px;
    //     font-family: $font-family;
    //     padding: 20px 0;
    //   }
    // }
    .brand-content {
      display: flex;
      justify-content: flex-end;
      .brand{
        height: $brand-scale;
        width: auto;
      }
      margin-bottom: 10px;
    }

    .form-title{
      font-family: $font-family;
      font-size: 30px;
      margin-bottom: 20px;
      font-weight: bold;
      text-align: right;
    }
    
  }
}
</style>