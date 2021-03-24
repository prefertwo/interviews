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

var MaxQueue = function () {
  this.list = [];
  this.maxList = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
  const len = this.maxList.length;
  if (len === 0) {
    return null;
  } else {
    return this.maxList[len - 1];
  }
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
    const len = this.maxList.length;
    const maxNum =
      this.maxList[len - 1] > value ? this.maxList[len - 1] : value;
    this.maxList.push(maxNum);
  }
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
  // this.
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
