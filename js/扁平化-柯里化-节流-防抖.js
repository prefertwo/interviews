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


/**
 * 防抖函数：动作绑定函数，触发高频事件后，一定时间后（n 秒）后执行函数，
 * 如果在该时间内再次触发则重新计时，等待 n 秒后再执行。防止多次重复执行。
 * 使用场景：一般是按钮事件、form表单的提交 等可能会发生多次重复执行的地方。
 */
function debounce(fn, time = 500) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, time);
  };
}

/**
 * 节流函数：高频事件触发，但在一定时间内只会执行一次，节流函数会稀释函数的执行频率。
 * 使用场景：浏览器resize、鼠标/触摸屏的 mouseover/touchmove 事件、滚动条的 scroll 动作。
 *
 * 与上面防抖函数的区别在于：执行频率不同。
 */
function throttle(fun, time = 500) {
  let isOk = true;
  return () => {
    if (!isOk) return;
    isOk = false;
    setTimeout(() => {
      fun.apply(this, arguments);
      isOk = true;
    }, time);
  };
}

let add = (x) => x + 1;

let unary = function (add) {
  return function (x) {
    return add(x);
  };
};
unary(add)(2);

/**
 * one(add(two())) // 3
 * two(add(one())) // 3
 * 写出 one()two()add() 的 实现
 */

let one = (x) => (x ? x + 1 : 1);
let two = (x) => (x ? x + 2 : 2);
let add = (x) => x;

let tt1 = one(add(two()));
let tt2 = two(add(one()));
console.log(tt1);
console.log(tt2);
