/**
 * 快速排序：选择一个基准值，然后比此值小的放左边，比值大的放右边，然后对两边的数组进行递归
 */

function quickSort(arr) {
  if (!Array.isArray(arr) || arr.length < 2) return arr;
  let baseNum = arr[0];
  let smallArr = [];
  let bigArr = [];
  for(let i=1;i<arr.length;i++) {
    if(arr[i]>baseNum) {
      bigArr.push(arr[i])
    } else {
      smallArr.push(arr[i])
    }
  }
  return quickSort(smallArr).concat([baseNum], quickSort(bigArr)); // [ 0, 1, 2, 3, 3, 5, 7, 8, 9 ]
  return quickSort(smallArr) + [baseNum] + quickSort(bigArr); // 012335789
}

let arr = [3,7,9,0,1,3,5,8,2];
let sorted = quickSort(arr)
console.log(sorted);
console.log([1] + [3]);
