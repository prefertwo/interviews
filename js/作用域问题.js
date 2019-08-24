/**
 * 变量的作用域(scope)是程序中定义这个变量的区域。
 * 全局变量拥有全局作用域，在JavaScript代码的任何地方可以调用。全局作用域可以不写 var
 * 局部变量只在定义的局部作用域内有效。函数参数也属于局部变量。
 * 在函数体内，同名的局部变量优先级高于同名的全局变量。如下：
 */
let scope = 'global';
function checkScope() {
  let scope = 'local';   // 声明局部变量是，如果不加 var 会自动声明称全局变量。
  console.log(scope)
}
checkScope() // local

/**
 * JavaScript没有块级作用域，取而代之的是使用函数作用域。ES6 的 let 声明，会形成块级作用域。
 * 声明提前（变量提升）是在JavaScript 预编译 时进行的。
 * 下面例子，函数内 scope 发生了变量提升。但是 使用 let 定义时，前面的 console 会报错：Uncaught ReferenceError: Cannot access 'scope' before initialization
 */

 let scope2 = 'global';
 function fn() {
   console.log(scope);
   var scope = 'local';
   console.log(scope);
 }
 fn()

 /**
  * 当代码在一个环境中执行时，会创建变量对象的一个作用域链。作用域链的用途是：保证对执行环境有权访问的所有变量和函数的有序访问。
  * 全局执行环境的变量对象始终都是作用域链中的最后一个对象。
  */

  let color = 'blue';
  function changeColor() {
    if(color == 'blue') {
      color = 'red';
    } else {
      color = 'blue';
    }
  }
  changeColor();
  console.log('color is now: ' + color); // color is now: red


  let name = 'Tom';
  (function() {
    if(typeof name == 'undefined') {
      name = 'Jack';
      console.log('GoodBye ' + name)
    } else {
      console.log('Hello ' + name)
    }
  })()
  // Hello Tom    当局部没有时，会向外层寻找，找到Tom。
  // 当执行 typeof name 时，会首先在自己作用域范围内寻找变量 name 如果找不到，会向父级作用域寻找，直到找到顶级作用域 window。

  let name2 = 'Tom';
  (function() {
    if(typeof name2 == 'undefined') {
      var name2 = 'Jack';
      console.log('GoodBye ' + name2)
    } else {
      console.log('Hello ' + name2)
    }
  })()
  // GoodBye Jack       此时函数内发生了变量提升，使用 name2 时，只声明而未赋值，因此为undefined。相当于下面这个：
  let name2 = 'Tom';
  (function() {
    var name2;
    if(typeof name2 == 'undefined') {
      name2 = 'Jack';
      console.log('GoodBye ' + name2)
    } else {
      console.log('Hello ' + name2)
    }
  })()

  var name = 'Tom';
  (function (name) {
    if (typeof name == 'undefined') {
      var name = 'Jack';
      console.log('Goodbye ' + name);
    } else {
      console.log('Hello ' + name);
    }
  })(name);
  // Hello Tom
  // 传递了参数name，所以 typeof name == string，因此，执行 else 分支。

  function Foo() {
    var i = 0;
    return function() {
      console.log(i++)
    }
  }

  var foo1 = Foo(), foo2 = Foo();
  foo1();
  foo1();
  foo2();
  // 0 1 0
  // 一开始误以为是作用域的关系，问了才知道，这是foo1 和 foo2 是两个不相干的函数。
  

