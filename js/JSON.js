/**
 * JSON 是JavaScript的一个严格的子集，利用JavaScript中的一些模式来表示结构化数据。
 * JSON 的语法可以表示以下三种类型的值：简单值、对象、数组。
 * JavaScript字符串和JSON字符串的最大区别是，JSON必须使用 双引号 ，单引号会导致语法错误。
 * 与JavaScript对象字面量相比，JSON对象有两个地方不一样。1、没有声明变量。2、没有末尾分号。
 * 早期的JSON解析器基本是使用JavaScript的 eval() 函数。
 * ECMAScript 5 对解析JSON进行了规范，定义了全局的JSON，
 * JSON对象有两个方法：stringify() 和 parse()。分别把JavaScript对象序列化为JSON字符串，和把JSON字符串解析为原生JavaScript值。
 * 
 * JSON.stringify() 除了 要序列化的JSON对象外，还可以接受两个参数。这两个参数用于指定不同方式序列化JSON对象。
 * 第一个参数是 过滤器，可以使数组，也可以是函数。
 * 
 */

 let book = {
   title: '最后一个谎言',
   author: ['东野圭吾', 'Tom'],
   year: 2012,
   edition: 3
 }

//  第二个参数为数组。只返回数组包含的属性。
 let jsonText = JSON.stringify(book, ['title', 'author']);
 console.log(jsonText) // {"title":"最后一个谎言","author":["东野圭吾","Tom"]}

//  第二个参数为函数。此函数接受两个，json对象的键和值。
let jsonText2 = JSON.stringify(book, function(key, value) {
  switch (key) {
    case 'author':
      return value.join('|')

    case 'year':
      return 2019;

    case 'edition':
      return undefined;

    default: 
      return value;
  }
})
console.log(jsonText2)
// {"title":"最后一个谎言","author":"东野圭吾|Tom","year":2019}
// 当属性值为 undefined 时，会被跳过。

/**
 * stringify() 的第三个参数 是用于控制结果中的 缩进 和 空白格。
 * 如果 该参数 是一个数值，则表示 每个级别缩进的空格数。最大缩进空格数为 10.
 * 如果 该参数 是一个字符串，则使用该字符串作为 缩进符号，不再使用空格。 
 * 
 */

 /**
  * JSON.parse() 也可以接受另一个参数，该参数是一个函数，称为还原函数，该函数接受两个参数，键 和 值，需要返回一个值。
  * 如果该函数 返回值 为 undefined，则表示从结果中删除相应的键。如果返回其他值，则插入到结果中。
  * 
  */

  let book2 = {
    title: '最后一个谎言',
    author: ['东野圭吾', 'tom'],
    year: 2019,
    edition: 3,
    releaseDate: new Date(2011, 11, 1)
  }
  let str = JSON.stringify(book2);
  let book3 = JSON.parse(str, function(key, value) {
    if(key == 'releaseDate') {
      return new Date(value)
    } else if(key == 'edition') {
      return undefined;
    } else {
      return value;
    }
  })
  console.log(book3)
  // 返回值:
/*   { title: '最后一个谎言',
  author: [ '东野圭吾', 'tom' ],
  year: 2019,
  releaseDate: 2011-11-30T16:00:00.000Z } */