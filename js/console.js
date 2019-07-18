/**
 * 第一题：JS事件循环中函数的执行顺序问题。包括 async、await、setTimeout、Promise
 * 第二题：考查函数传参和对象
 */

// 第一题：标出 输出顺序
async function async1() {
  console.log('async1 start'); // 3 -- 2
  await async2();
  console.log('async1 end'); // 5 -- 7
}

async function async2() {
  console.log('async2'); // 4 -- 3
}

console.log('script start'); // 1 -- 1

setTimeout(function() {
  console.log('setTimeout'); // 2 -- 8
}, 0)

async1();

new Promise(function(resolve) {
  console.log('promise1'); // 6 -- 4
  resolve();
}).then(function() {
  console.log('promise2'); // 7 -- 6
});

console.log('script end'); // 8 -- 5
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
new Promise(resolve => {
  resolve(1);
  Promise.resolve().then(() => console.log(2));
  console.log(4)
}).then(t => console.log(t));
console.log(3);
/**
 * 输出：4、3、2、1
 */

//  变式
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
async function async2() {
  //async2做出如下更改：
  new Promise(function(resolve) {
  console.log('promise1');
  resolve();
}).then(function() {
  console.log('promise2');
  });
}
console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0)
async1();

new Promise(function(resolve) {
  console.log('promise3');
  resolve();
}).then(function() {
  console.log('promise4');
});

console.log('script end');
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
  console.log('async1 start');
  await async2();
  //更改如下：
  setTimeout(function() {
      console.log('setTimeout1')
  },0)
}
async function async2() {
  //更改如下：
setTimeout(function() {
  console.log('setTimeout2')
},0)
}
console.log('script start');

setTimeout(function() {
  console.log('setTimeout3');
}, 0)
async1();

new Promise(function(resolve) {
  console.log('promise1');
  resolve();
}).then(function() {
  console.log('promise2');
});
console.log('script end');
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
async function a1 () {
  console.log('a1 start')
  await a2()
  console.log('a1 end')
}
async function a2 () {
  console.log('a2')
}

console.log('script start')

setTimeout(() => {
  console.log('setTimeout')
}, 0)

Promise.resolve().then(() => {
  console.log('promise1')
})

a1()

let promise2 = new Promise((resolve) => {
  resolve('promise2.then')
  console.log('promise2')
})

promise2.then((res) => {
  console.log(res)
  Promise.resolve().then(() => {
      console.log('promise3')
  })
})
console.log('script end')
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



//  第二题：考查函数传参和对象
function changeObjProperty(o) {
  o.siteUrl = "http://www.baidu.com"
  o = new Object()                        // 形参 o 的指向发生了改变，指向了向堆内存中一个新的对象。
  o.siteUrl = "http://www.google.com"
}
let webSite = new Object();
changeObjProperty(webSite);
console.log(webSite.siteUrl);
/**
 * 函数传参：函数的形参是值得传递，如果形参是对象的话，函数接受的是这个对象的指针地址。而 new Object() 声明了一个新对象，和原对象没关系了。原对象的值不会再有变化。
 * 对象作为参数，传递进去的是这个对象的引用地址，o.siteUrl 是给这个对象赋值，o = new Object() 是把 o 指向另一个对象，o.siteUrl 是给这个新对象赋值，不影响 webSite 这个变量指向的那个对象，两个 o 指向的对象的引用地址不同；
 */
