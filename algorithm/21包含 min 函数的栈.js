/**
 * 剑指offer面试题21：包含min函数的栈
 *
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数。
 * 在该栈中，调用 min、push 及 pop 的时间复杂度都是O(1)。
 *
 */

// 利用一个等大的辅助空间来存储最小值
class GetMin {
  constructor() {
    this.list = [];
    this._list = [];
    this._min = null;
  }
  addValue(num) {
    if (!this._min) {
      this._min = num;
    } else if (num < this._min) {
      this._min = num;
    }

    this.list.push(num);
    this._list.push(this._min);
  }
  delValue() {
    this.list.pop();
    this._list.pop();
  }
  getMin() {
    return this._list.pop();
  }
}

let arr = new GetMin();
arr.addValue(7);
arr.addValue(5);
arr.addValue(3);
arr.addValue(9);
arr.addValue(11);

// 依次注释可查看最小值是否与数组中一致
arr.delValue();
arr.delValue();
arr.delValue();
arr.delValue();
console.log(arr.list);
console.log(arr.getMin());

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.list = [];
  this.minList = [];
  this.minNum = null;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.list.push(x);
  const len = this.minList.length;
  if (len === 0) {
    this.minNum = x;
  } else {
    this.minNum = Math.min(this.minList[len - 1], x);
    // this.minList[len - 1] < x ? this.minList[len - 1] : x;
  }

  this.minList.push(this.minNum);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.list.pop();
  this.minList.pop();
  // 如果空栈需要将
  if (this.minList.length === 0) {
    this.minNum = null;
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  // this.minList.pop();
  // return this.list.pop();
  const len = this.list.length;
  return len > 0 ? this.list[len - 1] : undefined;
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  const len = this.minList.length;
  return len > 0 ? this.minList[len - 1] : undefined;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
