/**
 * 自定义数组方法，forEach、map、filter、every 等
 */

const arr = [1, 2, 3, 4, 5];

Array.prototype.myforEach = function (func, obj) {
  let len = this.length;
  // console.log('arguments===========', arguments);
  let _this = arguments[1] ? arguments[1] : window;
  // let _this=arguments[1]||window;
  for (let i = 0; i < len; i++) {
    func.call(_this, this[i], i, this);
  }
};

arr.myforEach((item, idx) => {
  console.log(`item=${item}, index=${idx}`);
}, {});

/**
 *
 * @param {filter方法} func
 * @param {*} obj
 */
Array.prototype.myFilter = function (func, obj) {
  let len = this.length;
  let _this = arguments[1] || window;
  let arr = [];
  for (let i = 0; i < len; i++) {
    func.call(_this, this[i], i, this) && arr.push(this[i]);
  }
  return arr;
};

/**
 * map 对每个元素执行方法，返回执行后的数组，不影响原数组
 *
 */

Array.prototype.myMap = function (func, obj) {
  let len = this.length;
  let _this = arguments[1] || window;
  let arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(func.call(_this, this[i], i, this));
  }
  return arr;
};

/**
 * every 方法，返回一个布尔值，是否每个值都符合提供的函数
 *
 */

Array.prototype.myEvery = function (func, obj) {
  let flag = true;
  let _this = arguments[1] || window;
  for (let i = 0; i < this.length; i++) {
    if (func.apply(_this, this[i], i, this) === false) {
      flag = false;
      break;
    }
  }
  return flag;
};

/**
 * reduce 方法
 * 有无初始值
 *
 */

Array.prototype.myReduct = function (func, initValue) {
  let len = this.length,
    nextValue,
    i;
  if (!initValue) {
    nextValue = this[0];
    i = 0;
  } else {
    nextValue = initValue;
    i = 1;
  }
  for (; i < len; i++) {
    nextValue = func(nextValue, this[i], i, this);
  }
  return nextValue;
};
