/**
 * 剑指offer面试题8：旋转数组的最小数字。
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 * 输入一个递增排序的数组的旋转，输出旋转数组的最小元素。
 * 例如输入 [3, 4, 5, 1, 2] 为 [1, 2, 3, 4, 5]的旋转数组， 输出 1
 */

const arr1 = [3, 4, 5, 1, 2]; // 常规测试用例
const arr2 = [1, 0, 1, 1, 1]; // 边界测试用例

/**
 * 最直观的方法是遍历取值比较，我们就能找到最小元素。时间复杂度为 O(n)。就是indexStart=0, indexEnd=arr.length 时，MinInOrder方法
 * 但是没有利用旋转数组的特性，因此达不到面试官要求。
 * 根据旋转数组规律可以使用二分查找法实现 O(logn) 的查找
 */

function MinFun1(arr) {
  if(arr == null || arr.length == 0) {
    throw new Error("Invalid parameters");
  }
  let indexStart = 0;
  let indexEnd = arr.length-1;
  let indexMiddle = indexStart;
  while(arr[indexStart] >= arr[indexEnd]) {
    // 这里的判断本来自己开始想的是 <= 1，但是旋转数组特性决定了最少有两个元素。因此使用 == 1 即可。
    if(indexEnd - indexStart == 1) {
      indexMiddle = indexEnd;
      break;
    }
    indexMiddle = Math.round((indexEnd + indexStart)/2); // 这里可能不为整数所以四舍五入取整
    if(arr[indexStart] == arr[indexEnd] && arr[indexMiddle] == arr[indexStart]) {
      return MinInOrder(arr, indexStart, indexEnd);
    }
    if(arr[indexMiddle] >= arr[indexStart]) {
      indexStart = indexMiddle;
    } else if(arr[indexMiddle] <= arr[indexEnd]) {
      indexEnd = indexMiddle
    }
  }
  return arr[indexMiddle];
}
// 当 3 个位置的值都相同时，只能循环解决
function MinInOrder(arr, indexStart, indexEnd) {
  let result = arr[indexStart];
  for(let i=indexStart + 1;i<indexEnd;i++) {
    if(result>arr[i]) {
      result = arr[i]
    }
  }
  return result
}

let res1 = MinFun1(arr1)
let res2 = MinFun1(arr2)
console.log('min==', res2);
