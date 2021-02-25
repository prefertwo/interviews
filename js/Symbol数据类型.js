/**
 * 详细文档：https://es6.ruanyifeng.com/#docs/symbol
 *
 * Symbol 是 ES6 引入了一种新的原始数据类型，表示独一无二的值。
 *    其他6种：undefined、null、字符串、数值、布尔、对象
 *
 * 对象的属性名现在可以有两种类型：
 *    1、是原来就有的字符串，
 *    2、是新增的 Symbol 类型。
 *    凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。
 *
 * 注意，Symbol函数前不能使用new命令，否则会报错。这是因为生成的 Symbol 是一个原始类型的值，不是对象。
 *
 *
 */

//  ES2019 提供了一个实例属性description，直接返回 Symbol 的描述。
const sys = Symbol("food");
console.log(sys.description); // food

/**
 * 下面代码中，如果s不放在方括号中，该属性的键名就是字符串s，
 * 而不是s所代表的那个 Symbol 值。
 */
let s = Symbol();
let obj = {
  [s]: function (arg) {},
};
obj[s](123);
