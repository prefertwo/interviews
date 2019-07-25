/**
 * 相关的进制转换问题
 * parseInt(string, radix) string为字符串，radix 为2-36之间的任意数字。
 * 使用者告诉这个函数，string 是 radix 进制的，函数将固定返回 string 以十进制时显示的数。
 * 
 * 如果基数(radix)为 undefined 情况 或者为0 或者是没指定的情况下，JavaScript 做出如下处理：
 *    1、如果字符串以 '0X'或者'0x'开头，则基数为十六进制
 *    2、如果字符串以 0 开头，基数为 8 或者 10 ，视具体环境。
 *    3、字符串以其他开头，则为十进制。
 */

 console.log( parseInt( '123', 5 ) ) // 3*5^0 + 2*5^1 + 1*5^2 = 38
 console.log( parseInt( '6.02e23', 10 ) ) // 6 如果parseInt的字符不是指定基数中的数字，则忽略该字符和所有后续字符，并返回解析到该点的整数值。parseInt将数字截断为整数值。
//  以下输出皆为 15， 当第一个字符串不能转化为数字时，返回 NaN.
 console.log( parseInt( '0xF', 16 ) )
 console.log(parseInt('F', 16))
 console.log(parseInt('17', 8))
 console.log(parseInt(021, 8))
 console.log(parseInt('015', 10))
 console.log(parseInt(15.99, 10))
 console.log(parseInt('FXX123', 16))
 console.log(parseInt('1111', 2))
 console.log(parseInt('15e', 10))
 console.log(parseInt('15px', 10))
 console.log(parseInt('12', 13))

 console.log(parseInt('0aa', 20)) // 210 正常转化 10*20^0 + 10*20^1 = 210
 console.log(parseInt(0xaa, 20)) // 540 先将 aa 按 十六进制 转化 得 170，然后按 20进制转化 得 540
 console.log(parseInt('0xaa', 20)) // 0  遇到不能转化字符只显示之前转化的 0
 
 console.log([1,2,3].map(parseInt))
 /**
  * 输出 [1, NaN, NaN]
  * map 有 三个参数 item，index，array ；parseInt 接受了前两个，即 item, index。即执行了 parseInt(1,0) parseInt(2,1) parseInt(3,2) 所以后两个为 NaN.
  */
 console.log(parseInt('hello', 8)) // NaN
 console.log(parseInt('hello', 20)) // 354
//  在合适的进制下，所有字母都可以转化为数字

