/**
 * 求两个数组的交集
 */

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = [3, 7, 0];

// 时间复杂度 O(N*M)(N==数组1的长度，M数组2的长度), 空间复杂度为 O(K)（K为交集个数）
function Intersection(arr1, arr2) {
  let newArr = [];
  for(let i=0;i<arr1.length;i++) {
    for(let j=0;j<arr2.length;j++) {
      if(arr1[i] === arr2[j]) {
        newArr.push(arr1[i])
        break; // 找到交集之后没必要继续比较，所以跳出循环，节省时间和步数
      }
    }
  }
  return newArr;
}

console.log(Intersection(arr1, arr2));
