/**
 * 将数组按照 升序 或者 降序 排列。(选择排序)
 */
// 功能函数：找出最大/最小值
// 默认降序
function findTargetIndex(arr, sort) {
  if(!Array.isArray(arr)) return;
  let target = arr[0];
  let targetIndex = 0;
  for(let i=0;i<arr.length;i++) {
    if(sort === 'asc') {
      if(arr[i] < target) {
        target = arr[i];
        targetIndex = i;
      }
    } else {
      if(arr[i] > target) {
        target = arr[i];
        targetIndex = i
      }
    }
  }
  return targetIndex;
}

// 执行函数
function selectionSort(arr, sort) {
  console.log(arguments);
  
  if(!Array.isArray(arr)) return ;
  let newArr = [];
  let targetIndex = 0;
  let len = arr.length;
  for(let k=0;k<len;k++) {
    targetIndex = findTargetIndex(arr, arguments[1]);
    newArr.push( arr.splice(targetIndex, 1)[0] )
  }
  return newArr;
}

let arr = [1,9,3,7,4,2,55,99,44,22,12,6];
let targetArr = selectionSort(arr);
console.log(targetArr);
