
function testSometing() {
  console.log("执行testSometing");
  return "testSometing";
}

async function testAsync() {
  console.log("执行testAsync");
  return Promise.resolve("hello async");
}

async function test() {
  console.log("test start...");
  const v1 = await testSometing();//关键点1
  console.log(v1);
  const v2 = await testAsync();
  console.log(v2);
  console.log(v1, v2);
}

test();

var promise = new Promise((resolve)=> { console.log("promise start.."); resolve("promise");});//关键点2
promise.then((val)=> console.log(val));

console.log("test end...")
// 输出:
// test start...
// 执行testSometing
// promise start..
// test end...
// testSometing
// 执行testAsync
// promise
// hello async
// testSometing hello async

/**
 * 详解：https://segmentfault.com/a/1190000011296839
 * 相关文章：
 *        https://segmentfault.com/a/1190000007535316
 *        https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function
 *        https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/await
 *        http://www.ruanyifeng.com/blog/2015/05/async.html
 * 
 */


function getSomething() {
  return "something";
}

async function testAsync() {
  return Promise.resolve("hello async");
}

async function test() {
  const v1 = await getSomething();
  const v2 = await testAsync();
  console.log(v1, v2);
}

test();