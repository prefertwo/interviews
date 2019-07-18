/**
 * 编写函数题，实现某些功能，或者改写函数
 */

let add = x => x+1;

let unary = function (add) {
  return function(x) {
    return add(x)
  }
}
unary(add)(2)

/**
 * one(add(two())) // 3
 * two(add(one())) // 3
 * 写出 one()two()add() 的 实现
 */

let one = x => x ? x+1 : 1;
let two = x => x ? x+2 : 2;
let add = x => x;

let tt1 = one(add(two()))
let tt2 = two(add(one()))
console.log(tt1)
console.log(tt2)
