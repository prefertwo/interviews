/**
 * 数据类型：图
 */

// 类似JavaScript中的 类，class
class Person {
  constructor(name) {
    this.name = name;
    this._friends = []; // _ 表示私有变量，只能通过getter得到，不能直接 a.b 的方法得到
  }
  add_friends(name) {
    this._friends.push(name);
  }
  get_friends() {
    return this._friends
  }
}

let guo = new Person("guozheng");
guo.add_friends("tom");

console.log(guo.name);
console.log(guo.get_friends());