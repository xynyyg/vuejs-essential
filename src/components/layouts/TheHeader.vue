<template>
  <div class="navbar navbar-default topnav">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" @click="toggleNav()">
          <span class="sr-only">Toggle nav</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a href="/" class="navbar-brand">
          <span class="title">{{ logo.title }}</span>
          <img :src="logo.src" :alt="logo.title">
        </a>
      </div>
      <div :class="['collapse', 'navbar-collapse', { in:showCollapsedNav }]" id="top-navbar-collapse">
        <ul class="nav navbar-nav">
          <li v-for="(item, index) in navList" :key="item.id" :class="{ active: index === activeNavIndex }">
            <a href="#" @click="changeNavIndex(index)">{{ item }}</a>
          </li>
        </ul>
        <!--入口组件-->
        <div class="navbar-right">
          <TheEntry />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheEntry from '@/components/layouts/TheEntry'
  export default {
    name: "TheHeader.vue",
    components: {
      TheEntry
    },
    data() {
      return {
        logo: {
          src: `${this.uploadsUrl}`,
          title: 'Vuejs'
        },
        navList: ['社区','问答','教程','头条'],
        activeNavIndex: 0,
        showCollapsedNav: false
      }
    },
    beforeCreate() {
      this.uploadsUrl = ''
    },
    methods: {
      changeNavIndex(index){
        this.activeNavIndex = index
      },
      toggleNav() {
        this.showCollapsedNav = !this.showCollapsedNav
      }
    }
  }
</script>

<style scoped>
    .title {display:none;}
    .navbar-default .navbar-nav > .active > a { background: rgba(0,0,0,.03);}
</style>