/**
 * 在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */
// 二维数组
const TwoDimArr = [
  [3, 5, 7, 9],
  [6, 7, 11, 19],
  [12, 13, 14, 21],
  [13, 15, 17, 23]
];
const testNumber = [3, 4, 13, 23]; // 测试用例，返回true，false，true，true

// 定义方法
function hasNumber(Arr, Num) {
  if(!Arr || !Arr.length || !Num ) {
    return false;
  }
  let row = 0;
  const rows = Arr.length;
  let column = Arr[0].length-1;
  let found = false;
  
  while(row < rows && column >= 0) {
    if(Arr[row][column] == Num) {
      // return true
      found = true;
      break;
    }
    if(Arr[row][column] > Num) {
      column--
    } else {
      row++
    }
  }
  return found;
}

function hasNumber2(Arr, Num) {
  if(!Arr || !Arr.length || !Num) {
    return false;
  }
  let arr = [];
  for(let i=0;i<Arr.length;i++) {
    arr = arr.concat(Arr[i]);
  }
  if(arr.indexOf(Num) == -1) {
    return false;
  } else {
    return true;
  }
}

for(let i=0;i<testNumber.length;i++) {
  let result = hasNumber2(TwoDimArr, testNumber[i])
  console.log(result);
}