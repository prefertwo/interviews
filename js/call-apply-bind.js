/**
 * call() bind() apply() 首先，这三个函数是用来改变函数执行的上下文的，也就是改变函数运行时this的指向。
 */

//  首先来个例子：
let obj = { name: "Tom" };
function Child(name) {
  this.name = name;
}
Child.prototype = {
  constructor: Child,
  sayName: function () {
    console.log(this.name);
  },
};

let childA = new Child("jerry");
childA.sayName(); // jerry
childA.sayName.call(obj); // Tom
childA.sayName.apply(obj); // Tom
childA.sayName.bind(obj)(); // Tom    bind 返回的是一个函数，必须要加 （）来执行

/**
 * 三个函数本质上是一样的，都是动态的改变this指向的上下文。
 * 区别：
 *      call、apply 和 bind 的区别在于，call、apply 改变上下文之后立即执行了函数，bind 则会返回一个函数，不会立即执行。需要后面加（）执行。
 *
 *      call 和 apply 的区别在于，参数。第一个参数都是要改变上下文的对象。
 *      call 从第二个参数开始，以参数列表的形式展现。
 *      apply 则把后面的参数全部放在一个数组里作为第二个参数。
 */

let arr1 = [1, 3, 6, 33, 67];
//  求数组中的最大值
console.log(Math.max.call(null, arr1)); // NaN    null 可以改为 Math
console.log(Math.max.call(null, 1, 3, 6, 33, 67)); // 67
console.log(Math.max.apply(null, arr1)); // 67

function fn() {
  console.log(this);
}
fn.call(); // 普通模式下 this 是 window ， 严格模式下 this 是 undefined
fn.call(null); // 普通模式下 this 是 window ， 严格模式下 this 是 null
fn.call(undefined); // 普通模式下 this 是 window ， 严格模式下 this 是 undefined

// 应用。举例：
// 将伪数组转化为数组。（含有length属性的对象，DOM节点，函数的参数arguments）
// js 中的伪数组 具有length属性，可以通过 下标 来访问元素，但没有 array 的 push、pop 等方法。
// 利用 call、apply 转化为真正的数组就可以使用数组的方法了。
function listToArray() {
  let ary = [];
  try {
    ary = Array.prototype.slice.call(likeArray); // 比如获取的DOM节点们
  } catch (e) {
    for (let i = 0; i < likeArray.length; i++) {
      ary[ary.length] = likeArray[i];
    }
  }
  return ary;
}

function fn2() {
  // 转化函数参数
  console.log(arguments);
  return Array.prototype.slice.call(arguments); // 使用 apply 一样效果
}
console.log(fn2(2, 3, 4, 5, 6)); // [ 2, 3, 4, 5, 6 ]

let obj2 = { 0: 1, 1: "tom", 2: true, length: 3 }; // 含有 length 属性的对象
console.log(Array.prototype.slice.call(obj2)); // [ 1, 'tom', true ]

let arr3 = [1, 2];
let arr4 = [3, 4];
console.log(arr3.concat(arr4)); // [ 1, 2, 3, 4 ]
console.log(arr3); // 不变
console.log(arr4); // 不变
// 使用 apply
console.log([].push.apply(arr3, arr4)); // 4
console.log(arr3); // [ 1, 2, 3, 4 ]
console.log(arr4); // [ 3, 4 ]

let obj3 = { a: 1 },
  str = "tom",
  arr5 = [1, 2];
// 判断类型，这个常用于 判断 array、object、null 。因为 typeof null == object
console.log(Object.prototype.toString.call(obj3)); // [object Object]
console.log(Object.prototype.toString.call(str)); // [object String]
console.log(Object.prototype.toString.call(arr5)); // [object Array]
console.log(Object.prototype.toString.call(null)); // [object Null]

// 利用 call 、apply 做继承
function Animal(name) {
  this.name = name;
  this.showName = function () {
    console.log(this.name);
  };
}

function Cat(name) {
  Animal.call(this, name); // 使用 this 代替 Animal 对象。这样 Cat 就有了 Animal的所有属性和方法
}

let cat = new Cat("tonny");
cat.showName(); // tonny

// 多继承
function Class1(a, b) {
  this.showClass1 = function (a, b) {
    console.log(`class1: ${a}, ${b}`);
  };
}
function Class2(a, b) {
  this.showClass2 = function (a, b) {
    console.log(`class2: ${a}, ${b}`);
  };
}
function Class3(a, b, c) {
  Class1.call(this);
  Class2.call(this);
}

let arr10 = [2, 3];
let demo = new Class3();
demo.showClass1.call(this, 1); // class1: 1, undefined
demo.showClass1.call(this, 1, 2); // class1: 1, 2
demo.showClass1.call(this, 1, 2, 3); // class1: 1, 2     忽略多余参数
demo.showClass2.apply(this, arr10, 4); // class2: 2, 3     忽略多余参数

// 用 apply 模拟实现 bind
Function.prototype.bind = function (context) {
  // 保存调用函数的引用，这里是 getName()
  let self = this;
  // 返回一个新函数
  return function () {
    return self.apply(context, arguments);
  };
};
let person = { name: "Tom" };
let getName = function () {
  console.log(this.name);
}.bind(person);
// 执行 bind() 内返回的新函数
getName(); // Tom
