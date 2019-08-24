/**
 * 函数实际上是对象，每一个函数都是Function类型的实例，而且和其他引用类型一样具有属性和方法。因此，函数名实际上是一个指向函数对象的指针，不会与某个函数绑定。红宝书P110
 * 定义函数的方法：函数声明语法定义、函数表达式定义、使用Function构造函数定义。
 */

//  函数声明语法定义
function sum(num1, num2) {
  return num1 + num2;
}

// 函数表达式定义
var sum = function(num1, num2) {
  return num1+num2;
};

// Function 构造函数定义。可以接受任意数量的参数，但是最后一个始终被认为是函数体，前面参数枚举出了新函数的参数。
var sum = new Function("num1", "num2", "return num1+num2"); // 这种方法是不推荐的。不过这种写法对于理解“函数是对象，函数名是指针”是非常直观的。

/**
 * 没有重载。ECMAScript中没有函数重载的概念。
 * 声明两个同名函数，结果是：后面的函数覆盖前面的函数。
 */

 function addSomeNumber(num) {
   return num + 100;
 }
 function addSomeNumber(num) {
   return num + 200;
 }

 console.log( addSomeNumber(100) ) // 300 .后面的函数覆盖了前面的函数

 /**
  * 函数声明和函数表达式 有何异同？
  * 解析器在向执行环境中加载数据时，会率先读取函数声明，并使其在执行任何代码前可用(可以访问)；代码开始执行前，解析器会通过一个名为 函数声明提升 的过程，读取并将函数声明添加到执行环境。并将它们放到源代码树的顶部。
  * 函数表达式则必须要等到解析器执行到它所在的代码行，才会真正被解析执行。
  */

  // 正常执行
  console.log(sum1(10, 20)); // 30
  function sum1(num1, num2) {
    return num1 + num2;
  }

  // 报错。在执行到函数所在的语句之前，变量sum中不会保存对函数的引用。
  console.log(sum2(10, 20)); // TypeError: sum2 is not a function
  var sum2 = function (num1, num2) {
    return num1 + num2;
  }
  console.log(sum2(10, 20)); // 30

  /**
   * 作为值的函数
   */

  function callSomeFunction(someFunction, someArguments) {
    return someFunction(someArguments)
  }

  function add10(num) {
    return num + 10;
  }
  function getCreeting(name) {
    return 'hello ' + name;
  }

  console.log( callSomeFunction(add10, 10) ) // 20
  console.log( callSomeFunction(getCreeting, 'jerry') ) // hello jerry
  /**
   * 实例：假设有一个对象数组，我们需要根据某个对象属性对数组进行排序
   */

  function createComparisonFunction(propertyName) {
    return function(object1, object2) {
      let value1 = object1[propertyName];
      let value2 = object2[propertyName];
      if(value1 < value2) {
        return -1;
      }else if(value1 > value2) {
        return 1;
      } else {
        return 0;
      }
    }
  }

  let data = [
    {
      name: 'tom',
      age: 3
    },
    {
      name: 'jerry',
      age: 5
    },
    {
      name: 'lili',
      age: 4
    }
  ];
  data.sort(createComparisonFunction("name"));
  console.log(data)
  // [ { name: 'jerry', age: 5 },
  // { name: 'lili', age: 4 },
  // { name: 'tom', age: 3 } ]
  data.sort(createComparisonFunction("age"));
  console.log(data)
  // [ { name: 'tom', age: 3 },
  // { name: 'lili', age: 4 },
  // { name: 'jerry', age: 5 } ]

  /**
   * 在函数内部，有两个特殊的对象：arguments 和 this。
   * 其中 arguments 是一个类数组对象，包含所有参数。arguments的主要作用是保存函数参数，但该对象有一个callee的属性，该属性是一个指针，指向拥有这个arguments对象的函数。
   */

  // 阶乘例子
  function factorial(num) {
    if(num<=1) {
      return 1;
    } else {
      return num * factorial(num-1);
    }
  }
  // 利用 callee 属性可以改为如下
  function factorial2(num) {
    if(num<=1) {
      return 1;
    } else {
      return num*arguments.callee(num-1);
    }
  }
  // 这样写的好处是，当函数名变化时，不会影响到内部的执行，都能正常完成递归操作。

  /**
   * 函数内部另一个特殊对象 this，this 引用的时函数执行的环境对象。
   */

  // 这段代码须在浏览器环境运行
  window.color = 'red';
  let oo = { color: 'blue' };
  function showColor() {
    console.log(this.color)
  }
  showColor(); // red
  oo.showColor = showColor;
  oo.showColor() // blue

  /**
   * 函数属性和方法。
   * 每个函数都包含两个属性，length 和 prototype。
   * length 表示函数希望接收的命名参数的个数。
   * 对于引用类型而言，prototype 是保存它们所有实例方法的真正所在。
   * 每个函数都包含两个非继承而来的方法：apply() 和 call()。这两个方法的用途都是在特定的作用域内调用函数，实际上等于设置函数体内this对象的值。
   * 两者区别 仅在于 接收参数的方式不同。
   * 它们真正强大的地方是能够扩充函数赖以运行的作用域。  更多在同文件夹下 call-apply-bind.js
   */

  // 例子
  window.color = 'red';
  let o = { color: 'blue' };
  function sayColor() {
    console.log(this.color)
  }
  sayColor();               // red
  sayColor.call(this);      // red
  sayColor.call(window);    // red
  sayColor.call(o);         // blue