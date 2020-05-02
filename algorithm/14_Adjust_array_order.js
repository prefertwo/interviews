/**
 * 剑指offer面试题14：调整数组顺序使奇数位于偶数前面。
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
 * 使得所有奇数位数数组的前半部分，所有偶数位于数组的后半部分。
 *
 */

function ReorderOldEven1(arr) {
  if (!arr || arr.length == 0) return;
  const len = arr.length;
  let indexBegin = 0,
    indexEnd = len - 1;
  while (indexBegin < indexEnd) {
    while (indexBegin < indexEnd && arr[indexBegin] % 2 !== 0) {
      indexBegin++;
    }
    while (indexBegin < indexEnd && arr[indexEnd] % 2 === 0) {
      indexEnd--;
    }
    if(indexBegin< indexEnd) {
      let numT = arr[indexBegin];
      arr[indexBegin] = arr[indexEnd];
      arr[indexEnd] = numT;
    }
  }
}

const arr = [1,2,3,4,5];
// ReorderOldEven(arr);
// console.log(arr);
/**
 * 此方法缺点是改变了原来数组。而且扩展性不高。
 * 下面一种利用数组push unshift方法，不改变原数组。时间复杂度为 O(n), 空间复杂度为 O(1)
 * 如果原数组是排序数组，此方法的结果将是：奇数逆序在前，偶数顺序在后。
 */

function ReorderOldEven2(arr) {
  if(!arr || arr.length === 0) return;
  let arrT = [];
  for(let i=0;i<arr.length;i++) {
    if(arr[i]%2 === 0) {
      arrT.push(arr[i])
    } else {
      arrT.unshift(arr[i])
    }
  }
  return arrT;
}

// console.log( ReorderOldEven2(arr) ) // [ 5, 3, 1, 2, 4 ]

/**
 * 第一种方法，扩展性不好。可以把判断数字应该是在前半部分还是后半部分的函数抽离出来。（前奇 后偶）
 * 有时候扩展性的本质，就是将代码分块儿，每块儿实现一个小功能。(解耦提高代码重用性)
 * 比如此题中的判断奇偶条件，可以改为，被3整除的，整数负数。
 * 此时只需要再写一个 判断条件函数，替换 isEven 位置即可。
 */

function ReorderOldEven3(arr) {
  if(!arr || arr.length === 0) return;
  const len = arr.length;
  Reorder(arr, len, isEven)
}

function Reorder(arr, len, fun) {
  let indexB = 0;
  let indexE = len - 1;
  while(indexB < indexE) {
    while (!fun(arr[indexB])) {
      indexB++
    }
    while(fun(arr[indexE])) {
      indexE--
    }
    if(indexB < indexE) {
      let numT = arr[indexE];
      arr[indexE] = arr[indexB];
      arr[indexB] = numT;
    }
  }

}
// 是否为偶数
function isEven(n) {
  // return n%2 === 0 // js常规判断
  return (n & 1) === 0 // 位运算更快，更优
}

ReorderOldEven3(arr)
console.log( arr );

