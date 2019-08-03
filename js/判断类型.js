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





