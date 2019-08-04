/**
 * 数组方法：
 *    栈方法：push()、pop()       栈：是一种LIFO(last-in-first-out)的数据结构。
 *    队列方法：push()、shift()   队列：是一种FIFO(first-in-first-out)的数据结构。
 *        使用：pop()、unshift() 可以反向模拟队列。
 *    转换方法：toString()、toLocaleString()、valueOf() 。。。所有对象都具有的方法。
 *    重排序方法：reverse()、sort()
 *    位置方法：indexOf()、lastIndexOf()
 *    迭代方法：every()、filter()、forEach()、map()、some()
 *    归并方法：reduce()、reduceRight()
 *    其他方法：concat()、splice()、join()、slice()、
 * 
 *    作为数组的字符串
 * 
 */

//  join() 接收一个可选参数，作为连接字符串的分隔符，返回连接的字符串。
let arr1 = ['tom', 'jerry', 'dog']
console.log(arr1.join()) // tom,jerry,dog
console.log(arr1.join('\\')) // tom\jerry\dog

// reverse() 将数组颠倒顺序，返回 逆序的数组
console.log(arr1.reverse()) // [ 'dog', 'jerry', 'tom' ]

// sort() 排序，返回排序后的数组。
// 默认按照升序排列，sort 会调用每个元素的 toString 转型方法，然后比较字符串
console.log(arr1.sort()) // [ 'dog', 'jerry', 'tom' ]
// 或者接受一个比较函数，比较函数接受两个参数，返回小于0的，按照升序排列，返回大于0的按降序排列
function compare(a, b) { // 如果要排序的是数值数组，则可以简化 (a, b) => return a-b; 或者是 return b-a;
  if(a < b) {
    return 1;
  } else if(a > b) {
    return -1;
  } else {
    return 0;
  }
}
let arr2 = ['ant', 'dog', 'cat'];
console.log(arr2.sort()) // [ 'ant', 'cat', 'dog' ]
console.log(arr2.sort(compare)) // [ 'dog', 'cat', 'ant' ]

// concat() 创建并返回一个新数组，新数组元素包括调用它的原始元素，和所有参数
console.log( [1,2].concat(3,4) )            // [ 1, 2, 3, 4 ]
console.log( [1,2].concat(3,[4, 5]) )       // [ 1, 2, 3, 4, 5 ]
console.log( [1,2].concat(3,[4, [5, 6]]) )  // [ 1, 2, 3, 4, [ 5, 6 ] ]

// slice() 返回指定数组的一个片段或者子数组。两个参数指定了开始和结束位置。含头不含尾，负数表示倒数。
let arr3 = [1, 2, 3, 4, 5];
console.log(arr3.slice(2,4)) // [ 3, 4 ]
console.log(arr3.slice(2)) // [ 3, 4, 5 ]
console.log(arr3.slice(2, -2)) // [ 3 ]

// splice() 删除、插入，或者同时进行。
let arr4 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(arr4.splice(3)) // 第一个参数，决定了删除，或插入的起始位置
console.log(arr4.splice(3, 2)) // 第二个参数，决定了删除元素的个数
console.log(arr4.splice(3, 2, 'g', 3, 4)) // 其后面的若干个参数，是插入的元素，插入位置是第一个参数
console.log(arr4)

// push()、pop() 在数组尾部 添加/删除 一个或者多个元素。返回数组新长度/删除的值
let arr5 = ['a', 'b', 'c'];
console.log( arr5.push('e', 'f') ) // 5
console.log(arr5.pop()) // c

// unshift()、shift() 在数组头部 添加/删除 一个或多个元素。返回数组新长度/删除的值
let arr5 = ['a', 'b', 'c'];
console.log( arr5.unshift('e', 'f') ) // 5 因为是一次性插入，因此插入后的位置和参数位置有关
console.log(arr5.shift()) // e

// toString()、toLocaleString() 将每个元素转为字符串，并输出逗号分割的字符串列表
let arr6 = ['a', 'b', 'c'];
console.log(arr6.toString()) // a,b,c

// forEach() 从头到尾遍历数组，为每个元素调用指定的函数。此函数接受三个参数：元素、下标、数组本身。
// forEach 无法在所有元素都传递给调用的函数之前终止遍历。想提前终止，只能把forEach放在一个try catch块中。
let arr7 = ['a', 'b', 'c'];
arr7.forEach((item, index, arr) => {
  console.log(item, index)
})

function foreach(a, f, t) {
  try { a.forEach(f, t) }
  catch(e) {
    if(e === foreach.break) return;
    else throw e
  }
}
foreach.break = new Error('stopIeration')


// map() 将调用的数组的每个元素传递给指定的函数，返回一个数组。传递给map 的函数必须有返回值。
let arr8 = [1, 2, 3];
console.log(
  arr8.map(x => { return x*x; })
) // [ 1, 4, 9 ]


// filter() 返回的数组元素是调用的数组的一个子集。传递的函数是用来逻辑判断的：返回true或false。返回true的则是子集成员，将被添加到作为返回值的数组中。
let arr9 = [1, 2, 3, 4, 5];
let newarr9 = arr9.filter( x => {return x>3;})
console.log(newarr9)
arr9.filter((x, i) => {return x!=undefined && x!=null;})


// every()、some() 它们对数组元素应用指定的函数进行判断，返回true或false
// every() 当且仅当数组中所有元素调用判定函数都返回 true，它才返回true
// some() 当数组中至少有一个元素调用判断函数返回true，它就返回true
// 根据数学上的惯例，在空数组上调用时，every() 返回true，some() 返回false.
let arr10 = [1, 2, 3, 4, 5];
let a1 = arr10.every( x => { return x<10 } );     // true
let a2 = arr10.every( x => { return x%2==0 } );   // false
let a4 = arr10.some( x => { return x>3 } );       // true
let a5 = arr10.some( x => { return x%2===0 } );   // true
console.log(a1, a2, a4, a5)


// reduce()、reduceRight()  使用指定的函数将数组元素进行组合，生成单个值。
// reduce() 有两个参数，第一个是执行化简操作的函数，第二个可选参数是传递给函数的初始值。简化函数的第一个参数是到目前为止的化简操作积累的结果，第2--4个参数为数组元素，元素下标，数组本身。
let arr10 = [2, 3, 4];
let sum = arr10.reduce( (x, y) => { return x+y;}, 0)
let max = arr10.reduce((x, y) => { return x>y?x:y; })
let big = arr10.reduceRight((acc, val) => {
  console.log(acc, val)
  return Math.pow(2, acc)
})
console.log('sum == ', sum)
console.log('max == ', max)
console.log('big == ', big)

// indexOf()、lastIndexOf() 第一个参数是要搜索的值，第二个可选，开始的位置。返回找到的第一个元素或者 -1（没找到返回）
let arr11 = [0, 1, 2, 1, 0];
console.log(arr11.indexOf(1))     // 1
console.log(arr11.lastIndexOf(0)) // 4


// 作为数组的字符串。字符串的行为类似于只读的数组。
// 除了使用 charAt() 方法访问单个的字符以外，还可以使用 方括号 []。 数组的通用方法还可以应用到字符串上。
let str = 'javascript';
console.log(str.charAt(2)) // v
console.log(str[4]) // s
console.log( Array.prototype.join.call(str, ' ') ) // j a v a s c r i p t
let resultStr = Array.prototype.filter.call(str, (x) => { return x.match(/[^aeiou]/); }).join(''); // 只匹配非元音字母
console.log(resultStr) // jvscrpt
// 字符串可以看做是只读数组，即不可变，所有能改变原数组的方法，都不可以使用在字符串上。使用这些方法修改字符串会导致错误：出错时没有提示。
