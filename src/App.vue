<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { reactive, ref } from 'vue'

// 创建路由对象
const router = useRouter()
const route = useRoute()

// 导航路由
interface navItem {
  index: number,
  name: string,
  path: string
}

const navList = reactive(
  [
    { index: 0, name: '首页', path: '/' },
    { index: 1, name: '技术', path: '/tech' },
    { index: 3, name: '关于', path: '/about' }
  ]
)

let selectedIndex = 0

function NavigateToPage(item:navItem ,index:number) {
  selectedIndex = index
  const urlPath = item.path
  router.push({
    path: urlPath
  });
}

</script>

<template>
  <div class="h-14 bg-gradient-to-r from-purple-500 to-pink-500">
    <div class="nav">
      <a v-for="(item, index) in navList" :key="index" :class="selectedIndex === index ? 'active':'' " class="nav-item" @click="NavigateToPage(item,index)">{{ item.name }}</a>
    </div>
  </div>
  <RouterView />
</template>

<style scoped>
.nav {
  height: 100%;
  display: flex;
  align-items: center;
}
.nav-item {
  height: 100%;
  padding: 0px 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.nav-item:hover {
  background: rgba(33, 67, 79, 1);
}
.nav-item:active {
  background: rgba(240, 40, 11, 1);
}
</style>
