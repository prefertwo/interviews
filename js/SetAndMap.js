/**
 * Set 是ES6新增的一种数据结构。它类似于数组，但是值是唯一的，没有重复值。(一般可以利用这个特性，进行数值数组的去重，也可以用于字符串数组)
 * Set 本身是一个构造函数，生成set数据结构。
 */

const s = new Set();
[1, 2, 3, 4, 5, 5, 4, 3, 2, 1].forEach(x => s.add(x));
//  console.log('s==', s) // s== Set { 1, 2, 3, 4, 5 }
for (let i of s) {
  console.log(i); // 1  2  3  4  5
}

/**
 * 上面例子说明，可以通过 add() 方法向 set 中添加数值，但是不会添加重复值。
 * Set 还可以接收一个数组作为参数，来初始化。
 */
const set1 = new Set([1,2,3,4,4,3,2,1]);
console.log([...set1]) // [ 1, 2, 3, 4 ]
console.log(set1.size) // 4 相当于数组的长度
// const divs = new Set(document.querySelectorAll('div'))
// console.log(divs.size) // 能正常打印 div 的个数

/**
 * 向 Set 中插入数值时，不会发生类型转换，5 和 "5" 是两个值。在 Set 内部认为 两个 NaN 是相等的。两个对象总是不等的，比如加入两个空对象。
 * 
 * Set 结构的实例有以下属性：
 *        Set.prototype.constructor: 构造函数，默认就是 Set函数
 *        Set.prototype.size: 返回Set实例的成员数量
 * 
 * Set 的方法分两大类：操作方法(操作数据)、遍历方法(遍历成员)
 *    Set.prototype.add(value)：添加一个值，返回set结构本身。
 *    Set.prototype.delete(value)：删除一个值，返回一个布尔值，表示是否删除成功。
 *    Set.prototype.has(value)：返回一个布尔值，确认value是否是 set 成员。
 *    Set.prototype.clear(): 清除所有成员，没有返回值。
 * 
 *    Set.prototype.keys()：返回键名的遍历器
 *    Set.prototype.values()：返回键值的遍历器
 *    Set.prototype.entries()：返回键值对的遍历器
 *    Set.prototype.forEach(): 使用回调函数便利每个成员
 * 
 * 需要特别注意的是，set的遍历顺序就是插入顺序。这个有时会非常有用，比如，用set保存一个回调函数的列表，这样就能保证按照添加顺序调用。
 * 由于set 没有键名，只有键值。或者说键名和键值是同一个值，所以，keys 和 values 方法是完全一致的。
 */

//  Array.from 方法可以将 Set结构 转化为数组
const set2 = new Set([1,2,3,4]);
console.log( Array.from(set2) )  // [ 1, 2, 3, 4 ]

let colorSet = new Set(['red', 'green', 'blue']);
for(let color of colorSet.keys()) {
  console.log(color) // red green blue
}

for(let color of colorSet.values()) { // 也可以省去 values 直接 item of set
  console.log(color) // red green blue
}

for(let color of colorSet.entries()) {
  console.log(color)
}
// [ 'red', 'red' ]
// [ 'green', 'green' ]
// [ 'blue', 'blue' ]

// 遍历的应用。能很方便的实现，并集，交集，差集
let seta = new Set([1,2,3]);
let setb = new Set([3,4,5]);
let union = new Set([...seta, ...setb])
console.log('并集==', union) // 并集== Set { 1, 2, 3, 4, 5 }
let intersect = new Set([...seta].filter(item => setb.has(item)));
console.log('交集==', intersect) //  交集== Set { 3 }
let difference = new Set([...seta].filter(item => !setb.has(item)));
console.log('差集==', difference) // 差集== Set { 1, 2 }

/**
 * 目前遍历操作中没有方法直接改变原来set结构。但是有两种变通的方法。如下：
 */
let setc = new Set([1,2,3]);
setc = new Set([...setc].map(val => val*2))
console.log('setc==', setc) // setc== Set { 2, 4, 6 }

let setd = new Set([1,2,3]);
setd = new Set(Array.from(setd, val => val*2))
console.log('setd==', setd) // setd== Set { 2, 4, 6 }


/**
 * JavaScript的对象，本质上是键值对的集合。但是它的键只能是传统意义上的字符串类型。这给它的使用带来了
 */