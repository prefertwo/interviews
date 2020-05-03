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
