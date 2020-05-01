/**
 * 我们通常使用 indexOf 和 -1 来判断，某个字符串或者数组是否包含某个元素。
 * 这样写法不好，暴露了底层实现细节，这些细节应该被屏蔽掉。
 * 因此，可以使用 ~ (字位反转)
 * ~x 可以简单理解为 
 */
let a = 'guozheng';
let b = ['guo', 'zheng', 'welcome'];
let c = 'guo'
console.log(!!~b.indexOf(c)); // 不存在为false, 存在为true
/**
 * 为什么要用 !! 来转换一下呢？
 * 如果不转化，当不存在时，结果为0，三元运算不会有问题，但是 短路运算会出问题。
 * 如下：
 */
let d = !!~b.indexOf(c) && '存在';
console.log(d) // 存在

let e = !!~b.indexOf('dd') && '存在';
console.log(e) // 0
/**
 * 这里期望是不输出的，也就是页面不应该展示 0。加上 !!转化则可以避免.
 * 布尔值在页面不会渲染
 */

if(~a.indexOf(c)) {
  console.log(`存在 ${c}`)
} else {
  console.log(`不存在 ${c}`)
}

/**
 * parseInt 和 Number
 * 当字符串为数值字符串时,两者没啥区别.
 * 当字符串中含有不可以转为数值的字符时: Number 会返回null, parseInt 返回前面能转化的部分
 */

 let ns1 = '23px';
 let ns2 = '23';
 let ns3 = 23;
 console.log( Number(ns1))
 console.log( Number(ns2))
 console.log( Number(ns3))
 console.log(parseInt(ns1))
 console.log(parseInt(ns2))
 console.log(parseInt(ns3))

 /**
  * indexOf 内部实现原理, MDN Polyfill
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
  */

// Production steps of ECMA-262, Edition 5, 15.4.4.14
// Reference: http://es5.github.io/#x15.4.4.14
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(searchElement, fromIndex) {
    "use strict";
    var k;

    // 1. Let o be the result of calling ToObject passing
    //    the this value as the argument.
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var o = Object(this);

    // 2. Let lenValue be the result of calling the Get
    //    internal method of o with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = o.length >>> 0;

    // 4. If len is 0, return -1.
    if (len === 0) {
      return -1;
    }

    // 5. If argument fromIndex was passed let n be
    //    ToInteger(fromIndex); else let n be 0.
    var n = fromIndex | 0;

    // 6. If n >= len, return -1.
    if (n >= len) {
      return -1;
    }

    // 7. If n >= 0, then Let k be n.
    // 8. Else, n<0, Let k be len - abs(n).
    //    If k is less than 0, then let k be 0.
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    // 9. Repeat, while k < len
    for (; k < len; k++) {
      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the
      //    HasProperty internal method of o with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      //    i.  Let elementK be the result of calling the Get
      //        internal method of o with the argument ToString(k).
      //   ii.  Let same be the result of applying the
      //        Strict Equality Comparison Algorithm to
      //        searchElement and elementK.
      //  iii.  If same is true, return k.
      if (k in o && o[k] === searchElement)
        return k;
    }
    return -1;
  };
}
