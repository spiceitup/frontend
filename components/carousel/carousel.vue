<template>
  <div class="carousel">
    <!--Indicators-->
    <ol class="carousel-indicators">
      <li v-for="page in pages" :key="page.id" @click="goto(page.id)" :class="isActive(page.id) ? 'active' : '' "></li>
    </ol>
    <!--/.Indicators-->

    <!--Slides-->
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item active">
        <v-skeleton-loader
        max-width="300"
        type="image"
        ></v-skeleton-loader>
      </div>
      <div class="carousel-item">
        <v-skeleton-loader
        max-width="300"
        type="image"
        ></v-skeleton-loader>
      </div>
      <div class="carousel-item">
        <v-skeleton-loader
        max-width="300"
        type="image"
        ></v-skeleton-loader>
      </div>
    </div>
    <!--/.Slides-->

    <!--Controls-->
    <a class="carousel-control-prev" >
      <span class="carousel-control-prev-icon" @click="goto(current - 1)" data-slide="previos"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" @click="goto(current - 1)" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
    <!--/.Controls-->
  </div>  
</template>
<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    data(){
      return {
        pages: [
          { id:0 },
          { id:1 },
          { id:2 },
        ],
        currentPage: 0,
      }
    },
    methods: {
      isActive(page: number){
        return page === this.currentPage
      },
      goto(page: number){
        if ( page >= 0 && page < this.pages.length) this.currentPage = page
      }
    }
  })
</script>
<style lang="scss" scoped>
  .carousel{
    width: 100%;
    position: relative;

    .carousel-indicators{
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 15;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-pack: center;
      justify-content: center;
      padding-left: 0;
      margin-right: 15%;
      margin-left: 15%;
      list-style: none;
    }

    .carousel-inner {
      padding: 0.5rem;
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;

      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;

      .carousel-item {
        position: relative;
        padding: 0.5rem;
        float: left;
        width: 33.67%;
        // display: none;
        // margin-right: -100%;
        // -webkit-backface-visibility: hidden;
        // backface-visibility: hidden;
        // transition: -webkit-transform .6s ease-in-out;
        // transition: transform .6s ease-in-out;
        // transition: transform .6s ease-in-out,-webkit-transform .6s ease-in-out;
      }
    }

    .carousel-control-prev {
      left:0;
    }

    .carousel-control-next {
      right:0;
    }

    .carousel-control-prev, .carousel-control-next {
      position: absolute;
      top: 0;
      bottom: 0;
      z-index: 1;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-align: center;
      align-items: center;
      -ms-flex-pack: center;
      justify-content: center;
      width: 15%;
      color: #fff;
      text-align: center;
      opacity: .5;
      transition: opacity .15s ease;
    }
  }
</style>