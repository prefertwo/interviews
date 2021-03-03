/**
 * 自定义reverse方法
 */

let arr = [1, 5, 3, 2, 6];
Array.prototype.myreverse = function () {
  const len = this.length;
  const middle = Math.floor(len / 2);
  for (var i = 0; i < middle; i++) {
    var temp = this[i];
    this[i] = this[len - 1 - i];
    this[len - 1 - i] = temp;
  }
  return this;
};
console.log(arr.myreverse());
console.log(arr);
// [ 6, 2, 3, 5, 1 ]
// [ 6, 2, 3, 5, 1 ]
