<template src="./login/login.html"></template>
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
<style lang="scss" src="./login/login.scss"></style>