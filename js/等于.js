
/**
 * 判断相等有两个符号：== 和 ===
 * == 比较运算符，只是判断值是否相等，在判断过程中可能会发生隐式的转换，从而返回真，比如：'123' == 123，返回 true
 * === 严格比较运算符，不仅判断值是否相等，还包括类型的判断，此时 '123' === 123，返回 false
 */

console.log( String('11') == new String('11') ) // true
console.log( String('11') === new String('11') ) // false
console.log( String('11') ) // 11 --> string类型
console.log( new String('11') ) // [String: '11'] --> object类型

/**
 * w3c解释：当 String() 和运算符 new 一起作为构造函数使用时，它返回一个新创建的 String 对象，存放的是字符串 s 或 s 的字符串表示。当不用 new 运算符调用 String() 时，它只把 s 转换成原始的字符串，并返回转换后的值。
 * String() 返回的是字符串
 * new String() 返回的是字符串对象，类型是对象。== 比较的时候进行了调用了 toString() 方法，进行了隐式转换。
 * 
 */
console.log( new String('11') === new String('11') ) // false
/**
 * 这个是因为：基本类型number、String等是通过值比较相等。而对象(Date,Array等)以及普通对象通过指针指向的内存中的地址来作比较。如下：
 */
let object1 = {
  name: 'guozheng',
  age: 28
}
let object2 = {
  name: 'guozheng',
  age: 28
}
let object3 = object1;
console.log( object1 == object3 ) // true
console.log( object1 === object3 ) // true
console.log( object1 == object2 ) // false
console.log( object1 === object2 ) // false
/**
 * 判断对象是否相等需要考虑：属性是否一样、对应的属性值是否一样。因此，检查对象的值相等基本上就需要遍历整个对象的每个属性看它们是否相等。
 * 但是依然有几种情况不能判断出来，比如：
 * 对象 A 的属性值为 undefined，而对象 B 对应的属性不存在
 * 两个对象的某个属性值都为 NaN
 * 属性值本身就是一个对象呢
 * 因此，当需要判断两个对象是否相等时可以使用 各种库，比如：Underscore。这些库考虑的边界比较全。
 */
console.log(  NaN == NaN ) // false

// 判断两个对象值是否相等
function diff(obj1, obj2) {
  let o1 = obj1 instanceof Object;
  let o2 = obj2 instanceof Object;
  if(!o1 || !o2) { // 不是对象
    return obj1 === obj2;
  }
  if( Object.keys(obj1).length !== Object.keys(obj2).length ) {
    return false;
  }
  for(let attr in obj1) {
    let t1 = obj1[attr] instanceof Object;
    let t2 = obj2[attr] instanceof Object ;
    if(t1 && t2) {
      return diff(obj1[attr], obj2[attr])
    } else if(obj1[attr] !== obj2[attr]) {
      return false;
    }
  }
  return true;
}
console.log( diff(object1, object2) ) // true


var value = 'Tom';
console.log('value is ' + (value === ' Tom ')?'something':'nothing' ) // something
console.log('value is ' + (value === ' Tom ') ) // value is false
console.log( value === ' Tom '?'something':'nothing' ) // nothing
/**
 * 第一个打印是把 'value is ' + (value === ' Tom ') 看作条件，此时为真，打印 something
 */

//  小数
 console.log( 0.1 + 0.2 == 0.3 ) // false
 console.log( 0.1 + 0.2 ) // 0.30000000000000004
//  不同环境对浮点数的运算结果不确定。下面这种特殊情况，最后为 5 的属于一种特殊情况
console.log( 0.15 + 0.25 == 0.4) // true
console.log( 0.15 + 0.25) // 0.4

