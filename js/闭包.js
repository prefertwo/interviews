/**
 * 闭包：指有权访问另一个函数作用域中的变量的函数。红宝书 P178
 * 创建闭包的常见方式是：在一个函数内部创建另一个函数。
 * 闭包有三个特性：
 *              1、闭包可以访问当前函数以外的变量。
 *              2、即使外部函数已经返回，闭包仍能访问外部函数定义的变量。
 *              3、闭包可以更新外部变量。
 * 
 * 经典输出 0 到 9 的题
 * 
 */
// 特性1
function getOuter() {
  let date = '720'
  function getDate(str) {
    console.log(str + date)
  }
  return getDate('今天是：')
}
getOuter() // 今天是：720

// 特性2
function getOuter2() {
  let date = '720';
  function getDate(str) {
    console.log(str + date)
  }
  return getDate;
}
let today = getOuter2();
today('今天是：')
today('明天不是：')

// 特性3
function updateCount() {
  var count = 0;
  function getVal(val) {
    count = val;
    console.log(count)
  }
  return getVal;
}
let count = new updateCount()
count(110)

/**
 * 经典输出 0 到 9 的题
 */
// 修改下面函数输出 0 -- 9
for (var i = 0; i< 10; i++){
	setTimeout(() => {
		console.log(i);
    }, 1000)
}
// 输出 十个 10

// 第一种方法，使用 let 声明变量，因为 let 会形成块级作用域。
for (let i = 0; i< 10; i++){
	setTimeout(() => {
		console.log(i);
    }, 1000)
} // 输出：0 ~~~ 9
// 第二种方法就是闭包
for(var i=0;i<10;i++) {
  (function(i) { // 也可写成 箭头函数
    setTimeout(() => {
      console.log(i)
    }, 1000)
  })(i)
}
// 第三种写法
for (var i = 6; i < 10; i++) {
  (function () {
      var j = i;
       setTimeout(() => {
       console.log(j);
    }, 1000)
 })()
}
// 第四种，一种思路，就是先存下来，最后再输出
let arr = [];
let m = 0;
for(var i=7;i<10;i++) {
  arr[i] = i;
  m++;
  setTimeout(function () {
    console.log(arr.shift())
  }, 1000)
}
// 或者
let arr = [];
for(var i=7;i<10;i++) {
  arr.unshift(i)
  setTimeout(function () {
    console.log(arr.pop())
  }, 1000)
}
// 第五种 封装函数
function pprint(i){
  setTimeout(()=>{
    console.log(i)
  },1000)
}
for(var i=0;i<10;i++){
  pprint(i)
}