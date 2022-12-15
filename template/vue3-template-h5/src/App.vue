<script setup>
// import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style scoped>
html, body,p,* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #fff;
  min-width: 100vw; /* no */
  min-height: 100vh; /* no */
}
body{
  background-color:#fff;
  padding: 0;
  margin: 0;
  padding-bottom: constant(safe-area-inset-bottom); /* 兼容 iOS < 11.2 */ 
  padding-bottom: env(safe-area-inset-bottom); /* 兼容 iOS >= 11.2 */
}
</style>
