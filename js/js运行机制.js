/**
 * 第一题：JS事件循环中函数的执行顺序问题。包括 async、await、setTimeout、Promise
 *
 * 首先，JS执行是单线程的，它是基于事件循环的。JS任务分为 同步任务和异步任务。
 * 所有同步任务在主线程上执行，形成一个执行栈。
 * 主线程之外还有一个任务队列，只要异步任务有了结果就在任务队列放置一个事件。
 * 一旦执行栈中的所有同步任务执行完毕，系统就会读取任务队列，将可运行的异步任务添加到可执行栈中，开始执行。
 *
 *
 * 参考：https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/7
 *
 * 根据规范，事件循环是通过任务队列来调节的。一个 Event Loop中可以有多个任务队列，一个任务队列就是一系列有序任务的集合。每一个任务都有一个任务源。
 * 同一个任务源的任务必须添加到同一队列，不同源的在不同队列。
 *
 * 宏任务(macroTask): 每次执行栈执行的代码就是一个宏任务。主要包括：script整体片段、setTimeout、setInterval、I/O、UI交互事件、postMessage、messageChannel、setImmediate。
 *
 * 微任务(microTask): 当前执行栈任务执行完之后立即执行的任务。主要包括：Promise.then、MutaionObserver、process.nextTick
 * 每次宏任务执行完会清空微任务列表。
 *
 * 1、js为什么设计成单线程？
 *    反向举例，假设是多线程，
 *    那么假设现在有2个线程，对同一个dom进行操作，一个线程删除dom一个线程是修改dom，
 *    那么浏览器该如何处理呢？这样考虑，单线程就很容易理解了。
 *
 * 2、js为什么需要异步？
 *    假设没有异步，那么代码就会自上而下顺序执行，那么当运行到一段很耗费时间的代码时（比如请求），
 *    代码就会阻塞，出现等待，对于用户而言，用户看到的就是卡死状态，用户体验很差。
 *    所以，js会有异步执行。
 *
 * 3、js既然是单线程，那又是如何实现异步的呢？
 *    是通过的事件循环(event loop)，理解了event loop机制，就理解了JS的执行机制。
 *
 *    JS的执行机制是：
 *    首先判断JS是同步还是异步，同步就进入主进程，异步就进入event table
 *    异步任务在event table中注册函数，当满足触发条件后，被推入event queue
 *    同步任务进入主线程后一直执行，直到主线程空闲时，才会去event queue中查看是否有可执行的异步任务，如果有就推入主进程中
 *
 *    任务分为：
 *    macro-task(宏任务)：包括整体代码script，setTimeout，setInterval
 *    micro-task(微任务)：Promise，process.nextTick
 *
 *    准确的JS的执行机制应该是：
 *    执行一个宏任务，过程中如果遇到微任务，就将其放到微任务的“事件队列”里
 *    当前宏任务执行完成后，会查看微任务的“事件队列”，并将里面全部的微任务依次执行完
 *
 *    关于settimeout
 *    3秒后,会执行setTimeout里的那个函数，但是并不是。
 *    准确的解释是：3秒后，setTimeout里的函数被会推入event queue，而event queue(事件队列)里的任务，只有在主线程空闲时才会执行。
 *    如果主线程执行内容很多，执行时间超过3秒，比如执行了10秒，那么这个函数只能10秒后执行了。
 *
 */

// 第一题：标出 输出顺序
async function async1() {
  console.log("async1 start"); // 3 -- 2
  await async2();
  console.log("async1 end"); // 5 -- 7
}

setTimeout(function () {
  console.log("执行了");
}, 3000);

async function async2() {
  console.log("async2"); // 4 -- 3
}

console.log("script start"); // 1 -- 1

setTimeout(function () {
  console.log("setTimeout"); // 2 -- 8
}, 0);

async1();

new Promise(function (resolve) {
  console.log("promise1"); // 6 -- 4
  resolve();
}).then(function () {
  console.log("promise2"); // 7 -- 6
});

console.log("script end"); // 8 -- 5
/**
 * 此题的输出在谷歌浏览器 和 vsCode 终端输出不一致。
 * script start
 * async1 start
 * async2
 * promise1
 * script end
 * promise2
 * async1 end
 * setTimeout
 */

// 变式
new Promise((resolve) => {
  resolve(1);
  Promise.resolve().then(() => console.log(2));
  console.log(4);
}).then((t) => console.log(t));
console.log(3);
/**
 * 输出：4、3、2、1
 */

//  变式
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  //async2做出如下更改：
  new Promise(function (resolve) {
    console.log("promise1");
    resolve();
  }).then(function () {
    console.log("promise2");
  });
}
console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);
async1();

new Promise(function (resolve) {
  console.log("promise3");
  resolve();
}).then(function () {
  console.log("promise4");
});

console.log("script end");
/**
 * script start
 * async1 start
 * promise1
 * promise3
 * script end
 * promise2
 * promise4
 * async1 end
 * setTimeout
 */

//  变式
async function async1() {
  console.log("async1 start");
  await async2();
  //更改如下：
  setTimeout(function () {
    console.log("setTimeout1");
  }, 0);
}
async function async2() {
  //更改如下：
  setTimeout(function () {
    console.log("setTimeout2");
  }, 0);
}
console.log("script start");

setTimeout(function () {
  console.log("setTimeout3");
}, 0);
async1();

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});
console.log("script end");
/**
 * script start
 * async1 start
 * promise1
 * script end
 * promise2
 * setTimeout3
 * setTimeout2
 * setTimeout1
 */

// 变式
async function a1() {
  console.log("a1 start");
  await a2();
  console.log("a1 end");
}
async function a2() {
  console.log("a2");
}

console.log("script start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("promise1");
});

a1();

let promise2 = new Promise((resolve) => {
  resolve("promise2.then");
  console.log("promise2");
});

promise2.then((res) => {
  console.log(res);
  Promise.resolve().then(() => {
    console.log("promise3");
  });
});
console.log("script end");
/**
 * script start
 * a1 start
 * a2
 * promise2
 * script end
 * promise1
 * promise2.then
 * promise3
 * a1 end
 * setTimeout
 */

// 一个有趣的例子
var tt;
console.log(typeof tt); // undefined
console.log(typeof typeof tt); // string
