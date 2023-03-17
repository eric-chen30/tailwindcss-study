<template>
  <div class="flex m-6">
    <!-- card1:store实例中的 count && doubleCount -->
    <div class="flex-1 card w-96 bg-primary text-primary-content m-4 shadow-xl">
      <div class="card-body italic text-amber-400 font-black">
        <h2 class="card-title">🍍Pinia Store的state</h2>
        <div class="font-bold text-lg italic text-amber-400 p-2">
          Current Count: {{ counterStore.count }}
        </div>
        <div class="font-bold text-lg italic text-red-300 p-2">
          Current doubleCount: {{ counterStore.doubleCount }}
        </div>
      </div>
    </div>
    <!-- card2 -->
    <div class="flex-1 card w-96 bg-primary text-primary-content m-4 shadow-xl">
      <div class="card-body italic text-amber-400 font-black text-lg">
        <h2 class="card-title">🍍Pinia与Vuex对比</h2>
        <p>1.更简单的API</p>
        <p>2.与组合式写法风格更接近的API</p>
        <p>3.搭配TS使用可以进行可靠的类型推断[Vuex 3.x 只适配 Vue 2，而 Vuex 4.x 是适配 Vue 3 的</p>
      </div>
    </div>
    <!-- card3 -->
    <div class="flex-1 card w-96 bg-primary text-primary-content m-4 shadow-xl text-lg">
      <div class="card-body italic text-red-300 font-black">
        <h2 class="card-title">🍍Pinia说明</h2>
        <p>①、pinia中 mutation已被弃用、因为它经常被认为是冗余的</p>
        <p>②、不需要动态添加 Store 它们默认是动态的</p>
        <p>③、不需要创建复杂的包装器来支持TS，一切都是可标注类型 @tyle</p>
        <p>④、没有过多魔法字符串（与代码形成强耦合的一些特定字符串）出现，应该尽量消除魔法字符串，由含义清晰的变量代替</p>
      </div>
    </div>
  </div>
  <!-- Hero -->
  <div class="hero min-h-screen">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="font-bold text-blue-300 text-lg">
        <h1 class="mb-5 text-5xl font-bold text-yellow-400">Hello Pinia!!!🍍</h1>
        <h2 class="text-2xl font-bold text-red-300">State操作</h2>
        <p class="mt-5 text-left">1.访问 state，默认可以通过 store实例 直接对 state 进行读写</p>
        <p class="mt-5 text-left">2.重置 state，通过调用 store实例 的 $reset() 方法将 state 重置为初始值</p>
        <p class="mt-5 text-left">3.变更 state，除了使用 store.count++ 直接改变，也可以通过 store.$patch({ count: store.count + 1 })</p>
        <p class="mt-5 text-left">4.替换 state，不能完全替换掉store的state，那样会破坏响应性，但是可以patch它：store.$patch({ count: 24 })</p>
        <p class="mt-5 text-left">5.订阅 state，counterStore.$subscribe</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 引入Store
import { useCounterStore, useTodos } from '../../stores/counter'
import { storeToRefs } from 'pinia';

// 1.store实例化对象接收返回
const counterStore = useCounterStore() // Proxy对象

// 2.可以通过结构获取store的所有返回值, 使用 storeToRefs() 确保从store中提取属性的时候保证其响应性
const { count, doubleCount} = storeToRefs(counterStore)
const { increment } = counterStore
console.log(count, doubleCount, increment)  // return [RefImpl ComputedRefImpl  function]

// 具体操作
counterStore.count++
counterStore.$patch({ count: counterStore.count + 1 })
counterStore.increment()

const todos = useTodos()
console.log(todos)
</script>

<style lang="scss" scoped></style>
