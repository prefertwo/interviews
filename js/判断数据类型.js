/**
 * 判断一个 变量 的类型，是 数组、字符串、还是对象或者函数等复杂类型。
 */

//  首先声明一些变量
const str = "string",
  num = 12,
  isBool = true,
  isUndefined = undefined,
  isNull = null,
  obj = { name: "tom" },
  arr = [1],
  fun = () => {};

/**
 * 先看最简单的 typeof 方法
 */

console.log(typeof str);
console.log(typeof num);
console.log(typeof isBool);
console.log(typeof isUndefined);
console.log(typeof isNull);
console.log(typeof obj);
console.log(typeof arr);
console.log(typeof fun);

/**
 * 输出：string
 * number
 * boolean
 * undefined
 * object
 * object
 * object
 * function
 *
 * typeof 能判断简单类型的变量，但是对于引用类型的数组，对象等却无法区别
 * 都会识别为 object
 *
 */

/**
 * 使用 instanceof 方法
 */

console.log(str instanceof String); // false
console.log(num instanceof Number); // false
console.log(isBool instanceof Boolean); // false
// console.log(isUndefined instanceof undefined); // 报错
// console.log(isNull instanceof null); // 报错
console.log(obj instanceof Object); // true
console.log(arr instanceof Object); // true
console.log(arr instanceof Array); // true
console.log(fun instanceof Object); // true
console.log(fun instanceof Function); // true

/**
 * 从上面结果可以看出：
 *  对于简单类型的字面量声明，使用 instanceof 方法无法判断类型
 *  对于复杂类型 instanceof 方法对于 Object 都会返回true，因为 数组，函数本质来说都是对象。
 * instanceof 方法的作用是：检测构造函数的 prototype 属性是否出现在某个实例对象的原型链。
 * 即，fun instanceof Object 说明 fun 在 Object 的原型链上。并不是一个对象。
 * arr, fun 都会沿着原型链找到 Object 所以，也会返回true，使用时要注意。
 */

let str1 = new String("12");
console.log(`这是一个字符串：${str1}`); // 这是一个字符串：12
console.log(typeof str1); // object
console.log(str1 instanceof String); // true
/**
 * 此时 str1 能沿着原型链找到 String
 */

/**
 * 使用 原型方法 进行判断
 */

console.log(Object.prototype.toString.call(str)); // [object String]
console.log(Object.prototype.toString.call(num)); // [object String]
console.log(Object.prototype.toString.call(isBool)); //
console.log(Object.prototype.toString.call(isUndefined)); //
console.log(Object.prototype.toString.call(isNull)); //
console.log(Object.prototype.toString.call(obj)); //
console.log(Object.prototype.toString.call(arr)); //
console.log(Object.prototype.toString.call(fun)); //
/**
 * [object String]
 * [object Number]
 * [object Boolean]
 * [object Undefined]
 * [object Null]
 * [object Object]
 * [object Array]
 * [object Function]
 *
 * 利用原型上的方法可以正确的判断出元素类型
 *
 */

/**
 * 上述三种方法的优劣：
 *    Array.isArray 优于 instanceof, 因为Array.isArray能检测iframes。
 *
 *    Objec.prototype.toString.call() 对于所有的基本数据类型都能进行判断，包括 undefined 、null。常用于判断浏览器内置对象。
 *
 *    instanceof  的内部机制是通过判断对象的原型链中是不是能找到类型的 prototype。
 *    使用 instanceof判断一个对象是否为数组，instanceof 会判断这个对象的原型链上是否会找到对应的 Array 的原型，找到返回 true，否则返回 false。
 *    instanceof 只能用来判断对象类型，原始类型不可以。并且所有对象类型 instanceof Object 都是 true
 *
 *    Array.isArray()是ES5新增的方法，当不存在 Array.isArray()
 *    可以用 Object.prototype.toString.call() 实现。如下例子：
 */

if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) == "[object Array]";
  };
}

// Array.isArray 的性能最好，instanceof 比 toString.call 稍微好了一点点。
