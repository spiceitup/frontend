<template>
    <article class="forum">
    <!-- <v-breadcrumbs :items="routes"></v-breadcrumbs> -->

    <div class="header">
      <div class="background"></div>
      <div class="content">
        <img src="/avatar.jpg" alt="" class="avatar">
        <div class="c-info">
          <div class="text">
            <h1>Forum</h1>
            <h2>Short description</h2>
          </div>
        </div>
        <div class="buttons">
          <button class="button is-primary">Join</button>
        </div>
      </div>
    </div>
    <v-tabs centered v-model="currentTab">
      <v-tabs-slider></v-tabs-slider>
      <v-tab v-for="tab in tabs" :key="tab">
        {{ tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="currentTab">
      <v-tab-item
        v-for="i in 3"
        :key="i"
        :value="'tab-' + i"
      >
        <v-card flat>
          <v-card-text>Ok</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>

    <div class="main">
      <h3 style="text-transform: uppercase;">Events</h3>
      <Carousel></Carousel>
      <h3 style="text-transform: uppercase;">what's new</h3>
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

  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import Carousel from '~/components/carousel/carousel.vue'

import { Breadcrumb } from '~/assets/ts/common/interface'

export default Vue.extend({
  data(){
    return {
      currentTab: null,
      tabs: ['posts','assets','useful infomation']
    }
  },
  components: {
    Carousel
  },
  computed: {
    routes(){
      const routes: Breadcrumb[] = [Breadcrumb('Home','/',false)]
      this.$route.fullPath.split('/').forEach(x => {
        if (!!x) routes.push(Breadcrumb(x,'/',true))
      })
    
      return routes
    }
  }
})
</script>
<style lang="scss" scoped>
.forum {
  .header{
    width: 100vw;
    // padding: 0 1rem;
    .background{
      height: 100px;
      width: 100%;
      background: rgb(2,0,36);
      background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 6%, rgba(0,212,255,1) 100%);
      padding: 0;
      margin: 0;
    }
    .content{
      display: flex;
      padding: 0 2rem;
      margin-bottom: 12px;
      margin-top: -14px;
      width: 100%;
      .avatar{
        background-color: #fff;
        background-size: cover;
        border-radius: 100%;
        border: 4px solid #fff;
        display: inline-block;
        height: 72px;
        width: 72px;
      }
      .c-info {
        align-self: flex-start;
        align-items: flex-start;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -ms-flex: 1;
        flex: 1;
        padding-left: 16px;
        margin-top: 24px;
        position: relative;
        // width: calc(100% - 80px);
        .text{
          display: inline-block;
          padding-right: 24px;
          h1{
            font-size: 28px;
            font-weight: 700;
            line-height: 32px;
            overflow: hidden;
            padding: 0 2px;
            margin: 0;
            text-overflow: ellipsis;
            width: 100%;
          }
          h2{
            font-size: 14px;
            font-weight: 500;
            line-height: 18px;
            padding: 0;
            margin: 0;
          }
        }

      }
      .buttons{
        display: inline-block;
      }
    }
  }
  .main {
    margin: 1rem 4rem;
  }
}
</style>
