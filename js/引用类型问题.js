/**
 * 引用类型相关考察
 */

function changeObjProperty(o) {
  o.siteUrl = "http://www.baidu.com";
  o = new Object()                    // 形参 o 的指向发生了改变，指向了向堆内存中一个新的对象。此时前后的 o 相当于是两个对象。
  o.siteUrl = "http://www.google.com";
}
let webSite = new Object();
changeObjProperty(webSite);
console.log(webSite.siteUrl); // http://www.baidu.com
/**
 * 函数传参：函数的形参是值得传递，如果形参是对象的话，函数接受的是这个对象的指针地址。而 new Object() 声明了一个新对象，和原对象没关系了。原对象的值不会再有变化。
 * 对象作为参数，传递进去的是这个对象的引用地址，o.siteUrl 是给这个对象赋值，o = new Object() 是把 o 指向另一个对象，o.siteUrl 是给这个新对象赋值，不影响 webSite 这个变量指向的那个对象，两个 o 指向的对象的引用地址不同；
 */



