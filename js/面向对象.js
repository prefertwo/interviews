/**
 * 面向对象：面向对象编程，OOP == Object Oriented Programming。此外还有，OOD(面向对象设计), OOA(面向对象分析)
 * 面向对象的语言都有一个标志：它们都有类的概念，而通过类可以创建任意多个具有相同属性和方法的对象。而ECMAScript中没有类的概念，因此它的对象与基于类的有所不同。
 * ECMA-262把对象定义为：无序属性的集合，其属性可以包含基本值、对象、函数。
 * ECMAScript中有两种属性：数据属性 和 访问器属性。
 * 数据属性四个特性：configurabl、enumerable、writable、value
 * 访问器属性不包含数值，包含一对儿getter 和 setter 函数（不过这两个函数不是必须的）
 * 
 * 要修改属性的默认特性，只能使用方法：Object.defineProperty()
 * 使用 Object.getOwnPropertyDescriptor() 可以取得给定属性的描述符
 * 
 * 
 * 
 */

//  数据属性
let person = {}
Object.defineProperty(person, 'name', {
  configurable: false,
  value: 'Tom'
})
console.log(person.name) // Tom
person.name = 'guozheng';
console.log(person.name) // Tom


//  访问器属性
 let book = {
   _year: 2008,
   edition: 1
 }
 Object.defineProperty(book, 'year', {
   get: function() {
     return this._year;
   },
   set: function(newValue) {
     this._year = newValue;
     this.edition += newValue - 2008;
   }
 })

 book.year = 2200; // year 就是访问器属性。

 console.log(book._year)
 console.log(book.edition) // 193

//  定义多个属性。下面定义了，两个数据属性：_year、edition 和 一个访问器属性：year
let bookA = {}
Object.defineProperties(bookA, {
  _year: {
    writable: true,
    value: 2008
  },
  edition: {
    writable: true,
    value: 1
  },
  year: {
    get: function() {
      return this._year;
    },
    set: function(newValue) {
      this.edition += newValue-this._year;
    }
  }
})

let descriptor = Object.getOwnPropertyDescriptor(bookA, 'year')
console.log(descriptor)
 /**
  * 输出：{ get: [Function: get],
  * set: [Function: set],
  * enumerable: false,
  * configurable: false }
  */

  /**
   * 创建对象方法：
   *    1、字面量和Object构造函数。缺点：使用同一个接口创建很多对象，会产生大量重复代码。
   *    2、工厂模式。解决了创建多个相似对象的问题，没有解决对象识别的问题（即怎样知道一个对象的类型）。
   *    3、构造函数模式。主要问题是：每个 方法 都要在每个实例上重新创建一遍。
   *    4、原型模式。
   *    5、组合使用构造函数和原型模式
   *    6、动态原型模式
   *    7、寄生构造函数模式
   *    8、稳妥构造函数模式
   */

  //  工厂模式
  function createPerson(name, age, job) {
    let o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
      console.log( this.name );
      return this.name;
    }
    return o;
  }

  let person1 = createPerson('guo', 23, '前端程序员')
  let person2 = createPerson('zheng', 28, '外卖员')
  person1.sayName()
  person2.sayName()

  // 构造函数模式
  function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
      console.log( this.name )
    }
  }

  let person3 = new Person('Tom', 3, 'eat');
  let person4 = new Person('Jerry', 6, 'catch Tom');
  person3.sayName();
  person4.sayName();
  /**
   * person3, person4 都有一个 constructor 属性，该属性指向 Person
   * person3, person4 即是 Object 的实例，也是 Person 的实例，使用 instanceof 可知，如下
   */
  console.log( person3.constructor == Person ) // true
  console.log( person4.constructor == Person ) // true

  console.log( person3 instanceof Person ) // true
  console.log( person3 instanceof Object ) // true
  console.log( person4 instanceof Person ) // true
  console.log( person4 instanceof Object ) // true

  // 原型模式
  function Student() {}
  Student.prototype.name = 'guozheng';
  Student.prototype.age = 28;
  Student.prototype.job = '程序员';
  Student.prototype.sayName = function() {
    console.log(this.name)
  }
  let stu1 = new Student();
  let stu2 = new Student();
  stu1.name = 'Tom';
  stu1.age = 29;
  console.log(stu1.hasOwnProperty('name') ) // true (只有实例上的属性才会返回true)
  console.log(stu1.name) // Tom
  console.log(stu2.name) // guozheng
  let allKeys = Object.keys(Student.prototype); // 此方法获取对象上所有可枚举实例属性，返回字符串数组。
  let stu1Keys = Object.keys(stu1);
  console.log(allKeys) // [ 'name', 'age', 'job', 'sayName' ]
  console.log(stu1Keys) // [ 'name', 'age' ]
  
  delete stu1.name
  console.log(stu1.name) // guozheng (实例上没有就去原型上找)
  // 更简单的原型写法
  function Student2() {}
  Student2.prototype = {
    // constructor: Student2, // 不加这一句 constructor属性不再指向Student2
    name: 'Tom',
    age: 3,
    job: 'eat',
    sayName: function() {
      console.log(this.name)
    }
  }


