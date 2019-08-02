/**
 * 许多OO语言都支持两种继承：接口继承 和 实现继承。
 * JavaScript只支持 实现继承，继承主要是依靠原型链来实现。
 * 原型链基本思想是利用原型让一个引用类型继承另一个引用类型的属性和方法。
 * 继承的方法：
 *        1、原型链
 *        2、借助构造函数。方法都在函数内定义，无法复用函数。
 *        3、组合继承。
 *        4、原型式继承
 *        5、寄生式继承
 *        6、寄生组合式继承
 */

//  原型链
function SuperType() {
  this.property = true;
}
SuperType.prototype.getSuperValue = function() {
  return this.property;
}
function SubType() {
  this.subproperty = false;
}
SubType.prototype = new SuperType(); // 继承了 SuperType
SubType.prototype.getSubValue = function() {
  return this.subproperty;
}

let instance = new SubType()
console.log(instance.getSuperValue()) // true
console.log(instance.getSubValue()) // false
/**
 * 主要问题来自包含引用类型值的原型。第二个问题是，在创建子类型的实例时，不能向超类型的构造函数中传递参数。
 */

//  借用构造函数。解决引用类型值的问题，还可以传参
function SuperType2() {
  this.colors = ['red', 'blue', 'green']
}
function SubType2() {
  SuperType2.call(this)
}
let instance1 = new SubType2()
instance1.colors.push('black');
console.log(instance1.colors) // [ 'red', 'blue', 'green', 'black' ]
let instance2 = new SubType2();
console.log(instance2.colors) // [ 'red', 'blue', 'green' ]

// 传参
function SuperType3(name) {
  this.name = name;
}
function SubType3() {
  SuperType3.call(this, 'Tom')
  // 实例属性
  this.age = 3;
}
let instance3 = new SubType3()
console.log(instance3.name) // Tom
console.log(instance3.age) // 3

// 组合继承。原型链+构造函数的组合
function SuperType4(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}
SuperType4.prototype.sayName = function() {
  console.log(this.name)
}
function SubType4(name, age) {
  SuperType4.call(this, name) // 继承属性
  this.age = age;
}
SubType4.prototype = new SuperType4() // 继承方法
SubType4.prototype.constructor = SuperType4;
SubType4.prototype.sayAge = function() {
  console.log(this.age)
}

let instance4 = new SubType4('Tom', 4);
instance4.colors.push('black')
console.log(instance4.colors) // [ 'red', 'blue', 'green', 'black' ]
instance4.sayName(); // Tom
instance4.sayAge(); // 4

let instance5 = new SubType4('Jerry', 6);
console.log(instance5.colors) // [ 'red', 'blue', 'green' ]
instance5.sayName(); // Jerry
instance5.sayAge(); // 6

// 原型式继承。使用 Object.create() 方法。接收两个参数，第一个是作为新对象原型的对象，第二个是为新对象定义额外属性的对象。
let person = {
  name: 'Tom',
  friends: ['zhangsan', 'lisi', 'wangwu']
}
let anotherPerson = Object.create(person);
anotherPerson.name = "Jerry";
anotherPerson.friends.push('lilei');

let yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = 'Linda';
yetAnotherPerson.friends.push('hanmeimei')

let anotherPersonAgain = Object.create(person, {
  name: {
    value: 'guo'
  }
})
console.log(anotherPersonAgain.name) // guo

console.log(person.friends)           // [ 'zhangsan', 'lisi', 'wangwu', 'lilei', 'hanmeimei' ]
console.log(anotherPerson.friends)    // [ 'zhangsan', 'lisi', 'wangwu', 'lilei', 'hanmeimei' ]
console.log(yetAnotherPerson.friends) // [ 'zhangsan', 'lisi', 'wangwu', 'lilei', 'hanmeimei' ]

// 寄生组合式继承
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}
function inheritPrototype(subType, superType) {
  let prototype = object(superType.prototype);
  prototype.constructor = prototype;
  subType.prototype = prototype;
}
function SuperType6(name) {
  this.name = name;
  this.colors = ['red', 'blue']
}
SuperType6.prototype.sayName = function() {
  console.log(this.name)
}
function SubType6(name, age) {
  SuperType6.call(this, name)
  this.age = age;
}
inheritPrototype(SubType6, SuperType6)
SubType6.prototype.sayAge = function() {
  console.log(this.age)
}

let instance6 = new SubType6('guo', 28)
instance6.sayName() // guo
instance6.sayAge() // 28
let instance7 = new SubType6('Tom', 2)
instance7.sayName() // Tom
instance7.sayAge() // 2






