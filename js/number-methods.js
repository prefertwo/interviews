/* --数值的常量 */
console.log( Number.EPSILON ) //  "机器精度"的值
console.log( Number.MAX_VALUE );
console.log(Number.MAX_SAFE_INTEGER); // 最大安全值
console.log(Number.isInteger(43)); // true 是否是整数
console.log(Number.isInteger(43.4)); // false


/* --数值的方法-- */
let num1 = 20.234;
console.log(num1.toExponential()) // 显示指数形式
num1.toFixed(3) // 保留3位小数
num1.toPrecision(3) // 有效位数显示3位
let nan1 = 1/'g';
console.log( isNaN(nan1) ) // 判读一个值是否为 NaN。此法迟早会引发bug，应用如下poly fill替代
Number.isNaN(nan1) // ES6 之后的方法，比上面的更准确。上面方法当nan1为字符串时，也会返回true
/* ----ES6之前的浏览器 polyfill如下---- */
if(!Number.isNaN) {
  Number.isNaN = function(a) {
    return a !== a;
  }
}


  // wxb08dd050fd02929d







/**
 * 如何判断0.1+0.2 和 0.3 相等的问题
 * 常见方法是设置一个误差范围值，通常称为“机器精度”，对JavaScript来说
 */

let times = 0;

function testWhile() {
  times++
  while(times>4) {
    console.log("dayu4")
  }
  console.log(times);
  
  let s2 = setInterval(() => {
    clearInterval(s2);
    // times++
    testWhile()
  }, 1000);
}

testWhile()





















