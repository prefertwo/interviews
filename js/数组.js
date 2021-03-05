/**
 * 主要是 总结围绕 数组展开，要求实现的功能函数
 */

//
let arrA = ["1", "2", "3", "4", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, "c", 1];
console.log(arrA.map(parseInt));
// 输出：[ 1, NaN, NaN, NaN ]
// echo:
const result = [1, NaN, NaN, NaN, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 1];

// 原数组：[1, 2, 3, 4, 5, 2, 2, 2, 1, 1, 1, 1] 要求输出：[1, 2, 3, 4, 5]。即，本题要求去除数组中的重复元素
let arrB = [0, 1, 2, 3, 4, 5, 2, 2, 2, 1, 1, 1, 1, 0, 0, 0];
// let arrB = ['a', 'a', 'b', 'c']
let objB = {};
let arrB2 = []; // 存放去重后元素
let arrB3 = []; // 重复的数组元素
arrB.map((item) => {
  if (!objB[item]) {
    objB[item] = 1;
    arrB2.push(item);
  } else {
    arrB3.push(item);
  }
});
// console.log( objB )
console.log(arrB2); // [ 1, 2, 3, 4, 5 ]
console.log(Array.from(new Set(arrB3))); // [ 2, 1 ]

// 原数组：[1, 2, 3, 4, 5, 2, 2, 2, 1, 1, 1, 1] 要求输出：[1, 2]。即，本题要求输出数组中的重复元素，上面 else

// 原数组：[1, 2, 3, 4, 5, 2, 2, 2, 1, 1, 1, 1] 要求输出：[1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 4, 5]。即，本题要求按照数组重复次数排序
// let arrC = [1, 2, 3, 4, 5, 2, 2, 2, 1, 1, 1, 1];
let arrC = ["a", "b", "c", "b", "b", "a"];

console.log(arrC.sort());

// 将两个 有序 递增数组合并为一个有序数组
let arrD1 = [1, 3, 7];
let arrD2 = [2, 3, 4, 5]; // 按要求，应输出为：[1, 2, 3, 3, 4, 5, 7]
// 方案一：concat 然后 排序；此时和两个数组是否有序无关
function otherSort(arrA, arrB) {
  let len = arrA.length > arrB.length ? arrA.length : arrB.length;
  let lenA = arrA.length,
    lenB = arrB.length;
  for (let i = 0; i < lenA; i++) {
    for (let j = 0; j < lenB; j++) {
      if (compare(arrA[i], arrB[j]) != compare(arrA[i], arrB[j + 1])) {
        arrB.splice(i, 0, arrA[i]);
      } else {
        arrB.splice(i + 1, 0, arrA[i]);
      }
    }
  }
}

function compare(a, b) {
  return a - b > 0 ? true : false;
}
// console.log( compare(1, 3) )
// console.log( compare(5, 3) )
otherSort(arrD1, arrD2);
console.log(arrD1);
console.log(arrD2);
