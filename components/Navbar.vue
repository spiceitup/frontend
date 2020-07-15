<template>
  <nav class="navbar is-danger" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="~assets/spice_logo.png" alt="">
    </a>

    <!-- <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a> -->
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <div class="field navbar-item">
        <div class="control">
          <input 
            type="text" 
            class="input" 
            v-model = "search"
            placeholder="Search" 
            required/>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <nuxt-link to='/' class="navbar-item">Home</nuxt-link>
      <nuxt-link to='/forum' class="navbar-item">Forum</nuxt-link>
      <nuxt-link to='/manage' class="navbar-item">Manage</nuxt-link>
      <nuxt-link to='/contact' class="navbar-item">Contact</nuxt-link>
    </div>
  </div>
</nav>
</template>
<script lang="ts">
  import Vue from 'vue'
  import Logo from '~/components/Logo.vue'
  export default Vue.extend({
    components:{
      Logo
    },
    data(){
      return {
        search: "",
        logoHeight: '20px',
        logoWidth: '50px'
      }
    }
  })
</script>