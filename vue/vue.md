## vue 相关知识点 -- 初级

    通常我们使用vue-cli创建项目时，Runtime Only 和 Runtime + Compiler两种模式。
    项目中使用的Runtime Only比较多。

    源码中最终执行声明周期的函数都是调用callHook方法。

## 生命周期：

    beforeCreate，created 都是在实例化vue的阶段，钩子的调用是在 initState 前后，initState的作用是初始化 props、data、watch、computed、methods 等属性，因此，beforeCreate中不能调用methods中的方法，也不能调用props、data 中定义的值。
    这两个函数执行时，并没有渲染 DOM 因此，也不能获取 DOM 元素。

    beforeMount 和 mounted 钩子发生在 mount，也就是DOM挂载前。
    在执行 vm._render() 函数渲染 VNode 之前，执行了 beforeMount 钩子函数，在执行完 vm._update() 把 VNode patch 到真实 DOM 后，执行 mounted 钩子。

    beforeUpdate 和 updated 钩子函数执行的时机是 数据更新的时候。

    beforeDestroy 和 destroyed 钩子函数执行的时机是 组件销毁阶段。

    activate 和 deactivated 钩子函数是专门为 keep-alive 组件定制的钩子。

    总结：created 钩子中可以访问到数据，mounted 钩子中可以获取到DOM，在destroy钩子函数中可以做一些定时器销毁的工作。

## 组件注册：

    全局注册：可以使用 Vue.component(tagName, options)
    Vue.component 函数定义在最开始初始化Vue的全局函数的时候

    局部注册：可以在组件内部使用 components 选项做组件的局部注册

    异步组件：在开发工作中为了减少首屏的代码体积，往往会把一些非首屏的组件设计成异步组件，按需加载。

## 响应式对象

    vuejs实现响应式的核心是利用了 ES5 的 Object.defineProperty。
    Object.defineProperty 方法直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回这个对象。
    Object.defineProperty( obj, prop, descriptor )
    obj: 是要在其上定义属性的对象，prop：要定义或者修改的对象的名称，descriptor：是被定义或修改的属性描述符。
    descriptor 有很多可选值，这里主要是 get 和 set，分别提供了 getter 和 setter 方法。当访问该属性时，触发getter方法，当对属性修改时，触发 setter 方法。

## proxy：

    代理的作用是把props 和 data上的属性代理到 VM 实例上

## observe:

    检测数据变化。observe方法就是给非VNode的对象类型数据添加一个Observer，如果已经添加过则直接放回，否则在满足一定条件下添加一个Observer对象实例。

## Observer:

    是一个类，作用是给对象的属性添加getter和setter，用于依赖收集和派发更新。

## defineReactive：

    功能是定义一个响应式对象，给对象动态添加getter和setter

## nextTick

    是vue中的一个核心的实现。

## v-model 实现原理

## vue 数据绑定的原理

    主要是依赖收集，Object.defineProperty，getter，setter，watcher

## xxx.sync 实现原理

## vuex 的实现及其原理

## 指令集

    v-text: String 更新元素的 textContent ，如果需要部分更新需使用 {{Mustache}}插值。
            <span v-text="msg"></span> 等同于 <span>{{msg}}</span>

    v-html：String 更新元素的innerHTML。内容按照普通HTML插入，不会作为vue模板进行编译。
            如果试图使用 v-html 组合模板，可以考虑是否通过使用组件来替代。

            注意：网站上动态渲染任意HTML是很危险的容易导致XSS攻击。只在可信内容上使用，永不用在用户提交内容上。

    v-show：any 根据表达式真假，切换元素的 display CSS属性。当条件变化，该指令触发过渡效果。
           v-show 不支持 template 元素，也不支持 v-else

    v-if：any 根据表达式真假渲染元素，切换时元素以及它的数据绑定/组件被销毁重建。如果元素是 template 将提取它的内容作为条件块。
          当和 v-for 一起使用时，v-for 优先级 高于 v-if，当你想渲染部分数据时，这个机制会十分有用。

    v-else：不需要表达式 前以兄弟元素必须有 v-if 或者 v-else-if

    v-else-if: any 前一元素必须有 v-if 或者 v-else-if，表示 v-if 的 else if 模块

    v-for：Array|Object|number|string|Iterable 基于源数据多次渲染元素或者模块   更多：https://cn.vuejs.org/v2/api/#v-for

    v-on：Function|Inline statement|Object  缩写@  参数event
          绑定事件监听器。表达式可以是 方法名或一个内联语句，如果没有修饰符可以省略。
          用在普通元素上时，只能监听原生DOM事件。用在自定义组件时，可以监听子组件触发的自定义事件。
          详情：https://cn.vuejs.org/v2/guide/events.html 

    v-bind：any(with argument)|Object(without argument)  缩写 ： 参数attrOrProp(optional)
            动态的绑定一个或者多个特性，或一个组件prop到表达式。
            详情：https://cn.vuejs.org/v2/api/#v-bind

    v-model：预期随表单类型不同而不同   用于表单控件或组件上创建双向绑定    更多：https://cn.vuejs.org/v2/api/#v-model

    v-slot：缩写#     详情：https://cn.vuejs.org/v2/api/#v-slot

    v-pre：不需要表达式    跳过这个元素和它的子元素的编译过程可以用来显示原始 mustache 标签，跳过大量的没有指令的节点会加快编译

    v-cloak：不需要表达式   这个指令保持在元素上，直到关联实例编译完成。和 CSS 规则如 [v-cloak] { display: none } 一起用时，         这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。

    v-once: 不需要表达式 只渲染元素和组件一次。随后渲染中，元素/组件/及其子节点将被视为静态内容并跳过。这可以用于优化更新。
            对低开销静态组件使用v-once

## v-show 和 v-if

    v-if 是真正的条件渲染，因为它确保了切换过程中，条件块儿内的事件监听器和子组件适当的被销毁重建。
    v-if 如果第一次条件为假，则什么也不做，直到条件第一次变为真，才会开始渲染条件块儿。
    v-show 则是不管条件是什么，都会渲染。只是基于条件进行 CSS 的切换。

    一般来说，v-if 有更高的切换开销，v-show 则有更多的初始渲染开销。因此，如果是切换频繁的使用 v-show 较好。运行时条件很少改变，使用 v-if 更好。

## 组件传值（自定义组件）

    event bus

## 父组件主动获取子组件的事件

## vue-router 的守卫类别

## vue-router 的实现
