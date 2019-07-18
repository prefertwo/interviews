// 数组扁平化
function flattenDepth(array, depth = 1) {
  let result = [];
  array.forEach(item => {
    let d = depth;
    if(Array.isArray(item) && d > 0) {
      result.push(...(flattenDepth(item, --d)));
    } else {
      result.push(item);
    }
  })
  return result;
}
let arr1 = [1,[2,3,[4,[5,6],7],8]];
console.log(flattenDepth(arr1)) // [ 1, 2, 3, [ 4, [ 5, 6 ], 7 ], 8 ]
console.log(flattenDepth(arr1, 2)) // [ 1, 2, 3, 4, [ 5, 6 ], 7, 8 ]
console.log(flattenDepth(arr1, 3)) // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log(flattenDepth(arr1, 5)) // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// 柯里化
function curry(func) {
  let l = func.length;
  return function curried() {
    let args = [].slice.call(arguments);
    if(args.length < l) {
      return function() {
        let argsInner = [].slice.call(arguments);
        return curried.apply(this, args.concat(argsInner))
      }
    } else {
      return func.apply(this, args);
    }
  }
}

let f = function(a, b, c) {
  return console.log([a, b, c])
};

let curried = curry(f);
curried(1)(2)(3) // [ 1, 2, 3 ]
curried(1, 2)(3) // [ 1, 2, 3 ]
curried(1, 2) // [ 1, 2, 3 ]

// 防抖
function debounce(func, wait) {
  let timer;
  return function() {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  }
}

// 可配置 防抖函数
function debounce(func, wait, leading, trailing) {
  let timer, lastCall = 0, flag = true;
  return function() {
    let context = this;
    let args = arguments;
    let now = + new Date();
    if(now - lastCall < wait) {
      flag = false;
      lastCall = now;
    } else {
      flag = true;
    }
    if(leading && flag) {
      lastCall = now;
      return func.apply(context, args);
    }
    if(trailing) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        flag = true;
        func.apply(context, args);
      }, wait);
    }
  }
}

// 节流函数
function throttle(func, wait) {
  let timer;
  return function() {
    let context = this;
    let args = arguments;
    if(!timer) {
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, wait);
    }
  }
}
