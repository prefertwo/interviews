/**
 * jQuery 有一个很方便的地方是 链式操作，可以不用多次重复调用一个变量。
 * 链式的实现方式：
 * 通过在对象方法中最后返回这个对象本身，返回的对象就可以继续调用它里面的方法。
 * 通过 return this 实现，当某个函数执行完毕，把执行结果返回，这样其他函数就能调用了。
 */
// 简单实现：
let objA = {
  fun1: function(a) {
    console.log(a)
    return this;
  },
  fun2: function(b) {
    console.log(b)
    return this;
  },
  fun3: function(c) {
    console.log(c)
    return this;
  }
}
objA.fun1(3).fun2(5).fun3(7) // 上面函数不能写成箭头函数，因为箭头函数不绑定this。this指向会发生变化。

// 改造为工厂函数: 扩展 prototype
function Obj() {}
Obj.prototype = {
  setNum: function(num) {
    this.num = num;
    return this;
  },
  plus: function(param) {
    this.num += param;
    return this;
  },
  multiply: function(param) {
    this.num = this.num*param;
    return this;
  },
  subtraction: function(param) {
    this.num = this.num - param;
    return this;
  },
  division: function(param) {
    this.num = this.num / param;
    return this;
  },
  getNum: function() {
    return this.num;
  }
}

let objTest = new Obj()
console.log( objTest.setNum(2).plus(200).multiply(2).subtraction(200).division(2).getNum() )
// 102

// 还可以这样写
function consoleStr(str) {
  console.log(str)
  return consoleStr;
}
consoleStr(123)(456)(789)

// 改成 IIFE（立即执行函数）
(function show(num) {
  console.log(num)
  return show;
})(123)(456)(789)
