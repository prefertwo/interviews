/**
 * 剑指offer面试题7：用两个栈实现队列。
 *
 * 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
 *
 * 详细：https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/
 *
 * 题解：https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/solution/mian-shi-ti-09-yong-liang-ge-zhan-shi-xian-dui-l-3/
 *
 */

var CQueue = function () {
  this.stack_in = []; // 存
  this.stack_out = []; // 删
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.stack_in.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.stack_out.length > 0) {
    return this.stack_out.pop();
  } else {
    // 把之前村的倒入出栈
    // this.stack_out
    while (this.stack_in.length > 0) {
      this.stack_out.push(this.stack_in.pop());
    }
    if (this.stack_out.length > 0) {
      return this.stack_out.pop();
    } else {
      return -1;
    }
  }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
