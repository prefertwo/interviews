function add(...values) {
  console.log(values); // 相当于原来的 arguments
  let sum = 0;
  for(let val of values) {
    sum += val;
  }
  return sum;
}

let a = add(1,2,3,4);
console.log(a);

/* rest 之后不能有别的参数，必须是最后一个参数 */
function add2(a,b,...c) {
  // 这种写法可以
}
function add2(a,b,...c,d) {
  // 这种写法不可以，会报错
}

/**
 * 扩展运算符
 */
// 用于数组合并
let arr1 = [1,2];
let arr2 = [3,4];
let arr3 = [...arr1, ...arr2];
console.log(arr3) // [ 1, 2, 3, 4 ] 不会改变原数组

// 对象取值
let object1 = {
  name: "guozheng",
  age: 28,
  like: ['sport', 'reading']
}
const {name, age, like} = object1;
console.log(name) // guozheng
console.log(age) // 28
console.log(like) // [ 'sport', 'reading' ]

// 字符串转数组
let str1 = 'guozheng';
let strToArr = [...str1];
console.log(strToArr); // [ 'g', 'u', 'o', 'z', 'h', 'e', 'n', 'g' ]

