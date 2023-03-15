<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { reactive } from 'vue'

const navList = reactive(
  [
    { index: 0, name: '首页' },
    { index: 1, name: '技术' },
    { index: 3, name: '关于' }
  ]
)

</script>

<template>
  <div class="header">
    <div class="nav">
      <div v-for="(item, index) in navList" :key="index" class="nav-item">{{ item.name }}</div>
    </div>
  </div>
  <RouterView />
</template>

<style scoped>
.header {
  height: 52px;
  width: 100%;
  background: rgba(255, 255, 255, 0.5);
}
.nav {
  height: 100%;
  display: flex;
  align-items: center;
}
.nav-item {
  padding: 6px 20px;
  cursor: pointer;
}
</style>
