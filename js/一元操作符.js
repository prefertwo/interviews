// 一元操作符：只能操作一个值的操作符。主要是递增递减、一元加和减
// 递增递减

var i = 0;
console.log(i++);
console.log(i++);
// 0 1, 说明是先打印值在执行增加

var m = 0;
console.log(++m);
console.log(++m);
// 1 2， 说明是先执行递增在打印值。 递减同理

var n = 0;
console.log(n--);
console.log(n--);
// 0 -1

var k = 0;
console.log(--k);
console.log(--k);
// -1 -2

var s1 = 1;
var s2 = "1";
var s3 = "z";
var s4 = "false";
var s5 = 0.2;
var s6 = {
  valueOf: function () {
    return -1;
  },
};
s1 = +s1;
s2 = +s2;
s3 = +s3;
s4 = +s4;
s5 = +s5;
s6 = +s6;
console.log(`s1==${s1}\ns2==${s2}\ns3==${s3}\ns4==${s4}\ns==${s5}\ns6==${s6}`);
// s1==0
// s2==1
// s3==NaN
// s4==NaN
// s==0.2
// s6==-1
/**
 * 一元加操作符以一个 + 表示，放在数值前面，对数值不会产生任何影响。但是对于非数值使用 Number() 函数进行了类型转换。
 * 即，true和false 被转为1和0，字符串按照一组特定规则解析。对象则是先调用它们的 valueOf() 和（或）toString() 方法，再转换得到的值。
 * 数值运算优先调用 valueOf 方法，如无则调用 toString，字符串运算(比如利用模板字符串取值,如果没有此方法，则回显示成 [object Object] )优先调用 toString 方法
 *
 * 一元减 主要用于表示 负数。当不是数值时，规则同 一元加。只不过最后将得到的数值转为负数。
 */

let obj2 = {
  valueOf: () => {
    return 10;
  },
  toString: () => {
    return "20";
  },
};

console.log(99 + obj2);
console.log(`${obj2}`);

var t1 = 1;
var t2 = "1";
var t3 = "z";
var t4 = "false";
var t5 = 0.2;
var t6 = {
  valueOf: function () {
    return -1;
  },
  toString: function () {
    return "1";
  },
};

t1 = -t1;
t2 = -t2;
t3 = -t3;
t4 = -t4;
t5 = -t5;
t6 = -t6;
console.log(`t1==${t1}\nt2==${t2}\nt3==${t3}\nt4==${t4}\nt==${t5}\nt6==${t6}`);

// t1==-1
// t2==-1
// t3==NaN
// t4==NaN
// t==-0.2
// t6==1
