/**
 * 字符串去重
 */
String.prototype.unique = function () {
  let obj = {};
  let str = "";
  const len = this.length;
  for (let i = 0; i < len; i++) {
    if (!obj[this[i]]) {
      obj[this[i]] = true;
      str += this[i];
    }
  }
  return str;
};

let str = "ggguozhengguozheng";
console.log(str.unique()); // guozhen
