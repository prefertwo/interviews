/**
 * 定义一个函数，将一个散列表变成排序列表。(总结各种排序方法)
 */

let arr = [76, 97, 54, 12, 9, 30, 65, 26, 88, 92, 43, 2];

// 冒泡排序 -- 修改原数组，时间复杂度为 O(N^2)(也被叫做二次时间)
function BubbleSort(arr) {
  if (!arr || arr.length === 0) return [];
  let len = arr.length - 1;
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < len; i++) {
      if (arr[i] > arr[i + 1]) {
        sorted = false;
        let itemT = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = itemT;
      }
    }
    len = len - 1; // 每遍历一次，未排序的就少一位
  }
}

// BubbleSort(arr);
// console.log(arr);

// 选择排序 -- 修改数组，时间复杂度为 O(n^2/2), 大 O 记法会忽略常数,所以冒泡排序和选择排序时间复杂度相同，但是选择排序会更快。
function SelectSort(arr) {
  if (!Array.isArray(arr)) return [];
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let minNumIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minNumIndex]) {
        minNumIndex = j;
      }
    }
    if (minNumIndex !== i) {
      let itemT = arr[minNumIndex];
      arr[minNumIndex] = arr[i];
      arr[i] = itemT;
    }
  }
  return arr;
}

// console.log( SelectSort(arr) );

// 插入排序。包括四个步骤：移除、比较、平移、插入
function InsertSort(arr) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let position = i;
    let item = arr[position];
    while (position > 0 && arr[position - 1] > item) {
      arr[position] = arr[position - 1];
      position--;
    }
    arr[position] = item;
  }
}

InsertSort(arr)
console.log(arr);
