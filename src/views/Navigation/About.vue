<template>
  <div class="p-6 text-cyan-100 font-bold">
    <h1 class="mb-4">0-1之间的随机数：{{Math.random()}}</h1>
    <h1 class="mb-4">响应对象state.count：{{ state.count }}</h1>
    <button class="border-2 rounded-md border-orange-400 border-none ring ring-offset-2 ring-pink-500" @click="countAdd">增加</button>
  </div>
  <div class="static" :class="{ active: isActive, 'text-error': hasError}"></div>
  <!-- 绑定动态对象控制样式 -->
  <div class="static" :class="styleObject"></div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'

// reactive()创建响应式数组和对象
const state = reactive({ count: 0})
function countAdd() {
  state.count++
}

// vue中对象都是深层响应式
const obj = reactive({
  nested: { count: 0 },
  arr: ['froo', 'bar']
})
function mutateDeeply() {
  obj.nested.count++
  obj.arr.push('azz')
}

// reactive返回的是一个原始对象的Proxy，它和原始对象是不相等的
const raw = {}
const proxy = reactive(raw)
console.log(raw === proxy) // false

// 对象上调用reactive()返回代理对象，代理对象上调用reactive()返回代理对象本身
console.log(reactive(raw) === proxy) // true
console.log(reactive(proxy) === proxy) // true

// 对于嵌套对象同样适用
const emptyProxy = reactive({
  nested: {}
})
const emptyRaw = {}
console.log(emptyProxy.nested === emptyRaw) // false

/**
 * reactive的局限性：
 * 1、仅对对象类型有效（对象、数组、Map、Set这样的集合类型），而对string、number、boolean这样的原始类型无效
 * 2、vue的响应式系统是通过属性访问进行追踪的，因此我们必须始终保持该响应式对象的相同引用
 */

let linkState = reactive({ count: 0 })
// 上面的应用({ count:0 })将不再被追踪，响应式连接已丢失
linkState = reactive({ count: 1 })
// 将响应式对象的属性赋值或结构到本地变量时，或将该属性传入一个函数时，失去响应性
let m = linkState.count
m++   // m失去响应连接性
let { count } = linkState
count++ // count失去响应连接

// TODO:ref()定义响应式变量
const num = ref(0)
console.log(num) // {value: 0}
console.log(num.value) //0
num.value++
console.log(num.value) // 1

// 一个包含对象类型值的ref可以响应式地替换整个对象
const objectRef =  ref({ count: 0 })
objectRef.value = {count: 1}  // 响应式替换
// ref被传递给函数或者从一般对象上被结构时，不会丢失响应性
const obj2 = {
  foo: ref(1),
  zoo: ref(2)
}
// 函数接收一个ref,需要通过.value获取值,仍然会保持响应式
function obj2Val(val) {
  console.log(val)
}
obj2Val(obj2.foo)
const {foo, zoo} = obj2
// 由上，ref()让我们创造一种对任意值的"引用"，并且能在不丢失响应性的前提下传递这些应用
onMounted(() => console.log(foo,zoo))

// TODO:ref在模板中的解包 {{count}} 模板中自动解包仅当ref是模板渲染上下文的顶层属性,不需要.value获取值

// TODO:ref在响应式对象中的解包
const refCount = ref(0)
const refReactiveObj = {
  refCount
}
console.log(refReactiveObj.refCount) // 0
// 如果将一个新的ref赋值给一个已关联的ref属性，那么它会替换掉旧的，也即是说原始ref已经和响应式对象相应属性失去连接

// 组合和集合的ref解包
const books = reactive([ref('Vue3 Guide!!!')])
console.log(books[0].value)

const map = reactive(new Map([['count', ref(0)]]))
console.log(map.get('count').value)

// TODO:计算属性默认是只读的，修改计算属性会收到警告，如果需要用到可写属性，可以同时提供getter和setter创建
const firstname = ref('John')
const lastname = ref('Doe')

const fullname = computed({
  // 不要在getter中做异步请求或更改DOM!!!
  get() {
    return `${firstname.value} ${lastname.value}`
  },
  // 计算属性中最好不要去做修改!!!
  set(value) {
    const [first, last] = value.split(' ')
    firstname.value = first
    lastname.value = last
  }
})
// 当你调用fullname,fullname.vallue = 'Eric Chen',就会调用set，从而根棍firstname、lastname

// 响应式boolean控制动态style
const isActive = ref(true)
const hasError = ref(false)
// 也可以去绑定控制动态style的对象
const styleObject = reactive({
  isActive: true,
  hasError: false
})
// 也可以绑定一个返回对象的计算属性
const isActiveCom = ref(true)
const errorCom = ref(null)
const classObject = computed(() => ({
  active: isActiveCom.value && !errorCom.value,
  'text-danger': errorCom.value && errorCom.value.type === 'fatal'
}))
// 可以给 :class 绑定一个数组来渲染多个 CSS class
const activeClass = ref('active')
const errorClass = ref('text-danger')
// <div :class="[activeClass, errorClass]"></div>
// 有条件的渲染——》三元表达式
// <div :class="[isActive ? activeClass : '', errorClass]"></div>
// <div :class="[{ active: isActive }, errorClass]"></div>


</script>

<style lang="scss" scoped>

</style>