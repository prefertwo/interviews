/**
 * 定义一个函数，取出数组中的间隔的元素，组成一个新数组。
 * 为了证明，同样的大 O 记法，但是执行效率有快有慢。
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function EveryOther(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      // i%2 == 0 换成 i & 1 == 0 会更高效。和1进行与运算，为0则是偶数，为1则是奇数
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function EveryOther2(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; ) {
    newArr.push(arr[i]);
    i += 2;
  }
  // for循环或者改为while
  // let i=0;
  // while (i < arr.length) {
  //   newArr.push(arr[i]);
  //   i += 2;
  // }
  return newArr;
}

console.log(EveryOther(arr));
console.log(EveryOther2(arr));
