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
 */
