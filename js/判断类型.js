/**
 * 判断一个 变量 的类型，是 数组、字符串、还是对象或者函数等复杂类型。
 */

//  首先声明一些变量
let obj = {a: 1, b: 2},
    obj2 = new Object(),
    arr = ['Tom', 'and', 'Jerry'],
    arr2 = new Array(2),
    str = 'this is a string',
    str2 = new String('my name is tom');

function fun() { console.log('function') }

//  判断 是否是 数组。
// instanceof 操作符
console.log(obj instanceof Array) // false
console.log(obj2 instanceof Array) // false
console.log(arr instanceof Array) // true
console.log(arr2 instanceof Array) // true
console.log(str instanceof Array) // false
console.log(str2 instanceof Array) // false
// ECMAScript5 新增方法 Array.isArray()
console.log(Array.isArray(obj)) // false
console.log(Array.isArray(obj2)) // false
console.log(Array.isArray(arr)) // true
console.log(Array.isArray(arr2)) // true
console.log(Array.isArray(str)) // false
console.log(Array.isArray(str2)) // false
// Objec.prototype.toString.call()
console.log( Object.prototype.toString.call(obj))    // [object Object]
console.log( Object.prototype.toString.call(obj2))   // [object Object]
console.log( Object.prototype.toString.call(arr))    // [object Array]
console.log( Object.prototype.toString.call(arr2))   // [object Array]
console.log( Object.prototype.toString.call(str))    // [object String]
console.log( Object.prototype.toString.call(str2))   // [object String]
/**
 * 上述三种方法的优劣：
 *    Array.isArray 优于 instanceof, 因为Array.isArray能检测iframes。
 * 
 *    Objec.prototype.toString.call() 对于所有的基本数据类型都能进行判断，包括 undefined 、null。常用于判断浏览器内置对象。
 * 
 *    instanceof  的内部机制是通过判断对象的原型链中是不是能找到类型的 prototype。使用 instanceof判断一个对象是否为数组，instanceof 会判断这个对象的原型链上是否会找到对应的 Array 的原型，找到返回 true，否则返回 false。
 *    instanceof 只能用来判断对象类型，原始类型不可以。并且所有对象类型 instanceof Object 都是 true
 * 
 *    Array.isArray()是ES5新增的方法，当不存在 Array.isArray() ，可以用 Object.prototype.toString.call() 实现。如下例子：
 */
if(!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) == '[object Array]';
  }
}

// Array.isArray 的性能最好，instanceof 比 toString.call 稍微好了一点点。

