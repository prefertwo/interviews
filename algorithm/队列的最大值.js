/**
 * 队列的最大值
 *
 * 请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。
 * 若队列为空，pop_front 和 max_value 需要返回 -1
 *
 * 详细：https://leetcode-cn.com/problems/dui-lie-de-zui-da-zhi-lcof/
 *
 * 题解：https://leetcode-cn.com/problems/dui-lie-de-zui-da-zhi-lcof/solution/mian-shi-ti-59-ii-dui-lie-de-zui-da-zhi-by-leetcod/
 *
 */

/* 1、暴力，直接遍历队列找到最大值 */

var MaxQueue2 = function () {
  this.list = [];
};

/**
 * @return {number}
 */
MaxQueue2.prototype.max_value = function () {
  if (this.list.length === 0) {
    return -1;
  }
  return Math.max(...this.list);
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue2.prototype.push_back = function (value) {
  this.list.push(value);
};

/**
 * @return {number}
 */
MaxQueue2.prototype.pop_front = function () {
  return this.list.shift() || -1;
};

/**
 * Your MaxQueue2 object will be instantiated and called as such:
 * var obj = new MaxQueue2()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */

/* 2、维护一个单调的双端队列。想不明白自己画画就能明白了 */

var MaxQueue = function () {
  this.list = [];
  this.maxList = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
  if (this.list.length === 0) {
    return -1;
  }
  return this.maxList[0];
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
  this.list.push(value);
  if (this.maxList.length === 0) {
    this.maxList.push(value);
  } else {
    let idx = this.maxList.length - 1;
    while (this.maxList[idx] <= value) {
      this.maxList.pop();
      idx--
    }
    this.maxList.push(value);
  }
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
  const res = this.list.shift();
  if (!res) return -1;
  if (res === this.maxList[0]) {
    this.maxList.shift();
  }
  return res;
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
