/**
 * 剑指offer面试题21：包含 min 函数的栈。
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数。
 * 在该栈中，调用 min、push 及 pop 的时间复杂度都是O(1)。
 */

// 利用一个等大的辅助空间来存储最小值
class GetMin {
  constructor() {
    this.list = [];
    this._list = [];
    this._min = null;
  }
  addValue (num) {
    if(!this._min) {
      this._min = num;
    } else if(num < this._min) {
      this._min = num;
    }

    this.list.push(num);
    this._list.push(this._min)
  }
  delValue() {
    this.list.pop();
    this._list.pop();
  }
  getMin () {
    return this._list.pop()
  }
}

let arr = new GetMin();
arr.addValue(7)
arr.addValue(5)
arr.addValue(3);
arr.addValue(9)
arr.addValue(11)

// 依次注释可查看最小值是否与数组中一致
arr.delValue()
arr.delValue()
arr.delValue()
arr.delValue()
console.log(arr.list);
console.log(arr.getMin());



