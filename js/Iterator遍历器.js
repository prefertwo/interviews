/**
 *
 * 详细文档：https://es6.ruanyifeng.com/#docs/iterator
 *
 * Iterator 的作用有三个：
 *        一是为各种数据结构，提供一个统一的、简便的访问接口；
 *        二是使得数据结构的成员能够按某种次序排列；
 *        三是 ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费。
 *
 *
 */

/**
 * 下面是类部署 Iterator 接口的写法。Symbol.iterator属性对应一个函数，执行后返回当前对象的遍历器对象。
 */
class RangeIterator {
  constructor(start, stop) {
    this.value = start;
    this.stop = stop;
  }

  [Symbol.iterator]() {
    return this;
  }

  next() {
    var value = this.value;
    if (value < this.stop) {
      this.value++;
      return { done: false, value: value };
    }
    return { done: true, value: undefined };
  }
}

function range(start, stop) {
  return new RangeIterator(start, stop);
}

let rg = range(1, 3);

console.log(rg.next()); // { done: false, value: 1 }
console.log(rg.next()); // { done: false, value: 2 }
console.log(rg.next()); // { done: true, value: undefined }

for (var value of range(0, 3)) {
  console.log(value); // 0, 1, 2
}

/**
 * 数组，Set，Map 数据结构原生具有 iterator 接口
 */

const arr = ["red", "green", "blue"];
for (let v of arr) {
  console.log(v); // red green blue
}

const engines = new Set(["Gecko", "Trident", "Webkit", "Webkit"]);
for (var e of engines) {
  console.log(e);
}
// Gecko
// Trident
// Webkit


const es6 = new Map();
es6.set("edition", 6);
es6.set("committee", "TC39");
es6.set("standard", "ECMA-262");
for (const [name, value] of es6) {
  console.log(name + ": " + value);
}
// edition: 6
// committee: TC39
// standard: ECMA-262
/**
 * 遍历 Set 结构和 Map 结构, 值得注意的地方有两个，
 *    首先，遍历的顺序是按照各个成员被添加进数据结构的顺序。
 *    其次，Set 结构遍历时，返回的是一个值，而 Map 结构遍历时，返回的是一个数组，该数组的两个成员分别为当前 Map 成员的键名和键值。
 */

//  类数组
const arrLike = {length: 2,0:'a', 1: 'b'}
for (let x of arrLike) {
  console.log(x); // TypeError: arrLike is not iterable
}

// 只需将伪数组转化为数组即可使用
for (let x of Array.prototype.slice.call(arrLike)) {
  console.log(x); // a b
}

