/**
 * 深拷贝
 * 主要是针对引用类型（对象、数组）
 */

function deepClone(obj, result) {
  let result = result || {};

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (typeof obj[prop] === "object" && obj[prop] !== null) {
        // 引用类型：继续深度拷贝
        if (Object.prototype.toString.call(obj[prop]) === "[object Object]") {
          result[prop] = {};
        } else {
          result[prop] = [];
        }
        deepClone(obj[prop], result[prop]);
      } else {
        // 非引用类型或者是函数：原始值
        result[prop] = obj[prop];
      }
    }
  }
}

/**
 * 无法拷贝函数类型
 */

const result = JSON.parse(JSON.stringify(target));
