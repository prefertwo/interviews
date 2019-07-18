/**
 * 第一题：JS事件循环中函数的执行顺序问题。包括 async、await、setTimeout、Promise
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