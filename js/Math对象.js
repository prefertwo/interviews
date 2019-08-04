/**
 * Math对象，是一个单体内置对象。具有数学常数和函数的属性和方法。不是一个函数对象。
 * Math对象提供了数学计算中可能用到的一些特殊值。如下属性：
 *    Math.E                自然对数的底数，即常量e的值。欧拉常数
 *    Math.LN10             10的自然对数
 *    Math.LN2              2的自然对数
 *    Math.LOG2E            以2为底e的对数
 *    Math.LOG10E           以10为底e的对数
 *    Math.PI               π的值
 *    Math.SQRT1_2          1/2 的平方根
 *    Math.SQRT2            2 的平方根
 */

 console.log(Math.E) // 2.718281828459045
 console.log(Math.LN2) // 0.6931471805599453
 console.log(Math.LN10) // 2.302585092994046
 console.log(Math.LOG2E) // 1.4426950408889634
 console.log(Math.LOG10E) // 0.4342944819032518
 console.log(Math.PI) // 3.141592653589793
 console.log(Math.SQRT1_2) // 0.7071067811865476
 console.log(Math.SQRT2) // 1.4142135623730951

/**
 * Math 的方法：
 *    min() max()
 */
let min = Math.min(23, 25, 17);
let max = Math.max(23, 25, 17);
console.log(min, max) // 17 25
let arr = [12, 32, 45, 76, 2, 44, 99];
let arrMax = Math.max.apply(Math, arr); // 此处用call不行，会返回 NaN，因为call接受的参数是 参数列表的形式
console.log(arrMax) // 99

// 舍入方法
console.log( Math.ceil(23.2) ) // 24   向上取整
console.log( Math.ceil(23.8) ) // 24
console.log( Math.floor(23.2) ) // 23  向下取整
console.log( Math.floor(23.8) ) // 23
console.log( Math.round(23.2) ) // 23  标准的四舍五入
console.log( Math.round(23.5) ) // 24
console.log( Math.round(23.8) ) // 24

// random 方法。返回一个大于等于0，小于1的随机数。可以根据公式：值 = Math.floor( Math.random()*可能值得总个数 + 第一个可能的值 )
let random1 = Math.floor(Math.random()*9 + 2); // 返回 2 到 10 的随机数，包括2和10.
console.log(random1)

/**
 * 其他方法。通常我们将以10为底的对数叫做常用对数，以e为底的对数称为自然对数。
 * num 表示参数
 */

 console.log( Math.abs(-22) ) // 22                       返回 num 的绝对值
 console.log( Math.exp(2) ) // 7.38905609893065           返回Math.E的 2 次幂
 console.log( Math.log(100) ) // 4.605170185988092        返回 num 的自然对数
 console.log( Math.pow(2, 3) ) // 8                       返回 2 的 3次幂
 console.log( Math.sqrt(16) ) // 4                        返回 num 的平方根
 console.log( Math.acos(Math.PI/6) ) // 1.0197267436954502             返回 num 的反余弦值 。。。。以下皆为弧度值。
 console.log( Math.asin(0.5) ) // 0.5235987755982989            返回 num 的反正弦值 
 console.log( Math.atan(1) ) //   0.7853981633974483                        返回 num 的反正切值
 console.log( Math.atan2(1,2) ) //  0.4636476090008061                      返回 1/2 的反正切值
 console.log( Math.cos(Math.PI/3) ) //  -0.5000000000000001                         返回 num 的余弦值。。。num 是以弧度为单位的数值，返回数值
 console.log( Math.sin(30) ) //  -0.9880316240928618                         返回 num 的正弦值
 console.log( Math.tan(Math.PI/4) ) // 0.9999999999999999                   返回 num 的正切值
