import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// 使用defineStore()创建一个 Store，第一个参数需要独一无二，第二个参数可以接收两类值：Setup函数 | Option对象
export const useCounterStore = defineStore('counter', () => {
  // Setup函数
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  // return值可以自定义但最好使用以 use开头Store结尾，中间用defineStore的第一个参数，唯一Id
  return { count, doubleCount, increment }

  // Option对象  由于上面 return 下面这段代码不执行
  //  当像一个新对象添加新属性的时候，且要保持新属性的响应式，需要使用 this.$set()


  // state: () => {
  //   return {
  //     count: 0
  //     // ......
  //   }
  // }
  // getters: {
  //   double: (state) => state.count * 2
  // },
  // actions: {
  //   increment() {
  //     this.count++
  //   }
  // }
})

// Pinia 提供一组类似Vuex的映射state的辅助函数
// 可以和之前一样定义Store，然后通过 mapStores()、mapState()、mapActions()访问

export const useTodos = defineStore('todos', {
  state: () => ({
    /** @type {{ text: string, id: number, isFinished: boolean }[]} */
    todos: [],
    /** @type {'all' | 'finished' | 'unfinished'} */
    filter: 'all',
    // 类型将自动推断为 number
    nextId: 0,
  }),
  getters: {
    finishedTodos(state) {
      // 自动补全！ ✨
      return state.todos.filter((todo) => todo.isFinished)
    },
    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.isFinished)
    },
    /**
     * @returns {{ text: string, id: number, isFinished: boolean }[]}
     */
    filteredTodos(state) {
      if (this.filter === 'finished') {
        // 调用其他带有自动补全的 getters ✨
        return this.finishedTodos
      } else if (this.filter === 'unfinished') {
        return this.unfinishedTodos
      }
      return this.todos
    }
  },
  actions: {
    // 接受任何数量的参数，返回一个 Promise 或不返回
    addTodo(text) {
      // 你可以直接变更该状态
      this.todos.push({ text, id: this.nextId++, isFinished: false })
    }
  }
})

/**
 * 与 Vuex 对比：
 * 1.更简单的API
 * 2.与组合式写法风格更接近的API
 * 3.搭配TS使用可以进行可靠的类型推断
 * [Vuex 3.x 只适配 Vue 2，而 Vuex 4.x 是适配 Vue 3 的]
 * 
 * pinia中 mutation已被弃用、因为它经常被认为是冗余的
 * 不需要动态添加 Store 它们默认是动态的
 * 不需要创建复杂的包装器来支持TS，一切都是可标注类型 @tyle
 * 没有过多魔法字符串（与代码形成强耦合的一些特定字符串）出现，应该尽量消除魔法字符串，由含义清晰的变量代替
 * 
 */


/**
 * 我们可以定义任意多的 store ，但为了更方便全局的管理，我们应该根据模块功能去不同的文件中定义store
 * 一旦 store 被实例化，可以直接访问 store 中 state、getters、actions中的任何属性 
 * 
 * 需要注意的是：
 * 1。store中的变量是用 reactive()包装的，意味着我们不需要在getters后面写 .value
 */

/**
 * state操作：
 * 1.访问 state，默认可以通过 store实例 直接对 state 进行读写
 * 2.重置 state，通过调用 store实例 的 $reset() 方法将 state 重置为初始值
 * 3.变更 state，除了使用 store.count++ 直接改变，也可以通过 store.$patch({ count: store.count + 1 })
 * 4.替换 state，不能完全替换掉store的state，那样会破坏响应性，但是可以patch它：
 *    store.$patch({ count: 24 })
 *    也可以通过变更 pinia实例的 state来初始化整个应用的satte
 *    pinia.state.value = {}
 * 5.订阅 state，counterStore.$subscribe((mutation, state) => {
 *              // .........
 *        }, {detached: true}) 
 *   默认情况下 store.$subscribe会绑定到他们的组件上[store在组件的setup里]，意味着与组件共存亡，如果想在组件卸载后，依然保留它们，增加第二个参数{detached: true}  
 * 
 * 
 * Tip: 也可以在 pinia 实例上 使用 watch() 监听整个 state
 */