<template>
  <div class="content">
    <h3 style="text-transform: uppercase;">explore</h3>
    <Carousel></Carousel>
    <h3 style="text-transform: uppercase;">happening now</h3>
    <v-skeleton-loader
    max-width="100%"
    type="card"
    ></v-skeleton-loader>
    <v-skeleton-loader
    max-width="100%"
    type="card"
    ></v-skeleton-loader>
    <v-skeleton-loader
    max-width="100%"
    type="card"
    ></v-skeleton-loader>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  import Carousel from '~/components/carousel/carousel.vue'
  export default Vue.extend({
    components: {
      Carousel
    },
    data() {
      return {
      }
    },
    methods:{
      }
  })
</script>
<style lang="scss">
  .content {
    padding: 1rem 2rem;
  }
</style>