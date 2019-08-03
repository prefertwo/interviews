/**
 * 写一个函数 find 实现下面功能
 * let test = {a:{b:{c: '1'}}}
 * find(test, 'a.b.c') // 1
 * find(test, 'a.c.e') // undefined
 */
// 方法1
function findElement(test, str) {
  let arr = str.length > 1 ? str.split('.') : [str];
  let curObj = test[arr[0]];
  if(curObj && typeof curObj == 'object' ) {
    arr.shift();
    let newStr = arr.length > 0 ? arr.join('.') : arr[0];
    return findElement(curObj, newStr);
  } else {
    return curObj;
  }
}

let test = { a: {b: {c: '1'}}}
console.log( findElement(test, 'a.b.c') )
console.log( findElement(test, 'a.b.e') )

// 方法二。用到了数组的reduce方法
function find(obj, str) {
  let props = str.split('.');
  return props.reduce((acc, cur) => (acc ? acc[cur] : undefined), obj);
}

// let test = { a: { b: { c: 1 } } };
// console.log(find(test, 'a.b.c'));
// console.log(find(test, 'a.c.e'));








/**
 * 实现如下功能
 */
class Task {
  add(fn, context, ...args) {}
  stop() {}
  run() {}
}

/* function Task() {}
Task.prototype.add = function(fn, context, ...args) {}
Task.prototype.stop = function() {}
Task.prototype.run = function() {}
 */
let task1 = function(next) {
  setTimeout(() => {
    console.log(1);
    next();
  }, 1000);
};

let tast2 = function(next, num) {
  setTimeout(() => {
    console.log(num);
    next();
  }, 3000);
};

let task = new Task();
// task.add(task1).add(tast2, null, 2);
// task.run();
// 其中 next 表示执行下一个方法
// 一秒后输出1,再过三秒后输出2

/* class Task {
  constructor() {
    this.queue = [];
  }
  add(fn, context, ...args) {
    this.queue.push(() => {
      fn.apply(context, [this.run.bind(this), ...args]);
    });
    return this;
  }
  run() {
    if (!this.queue.length) return;
    let fn = this.queue.shift();
    fn();
  }
} */




