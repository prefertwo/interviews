/**
 * 格式化金额(也可以是数值)
 * @param {number | string} num 要格式化的值
 * @param {number | string} fix 要保留的小数位
 * @param {Boolean} isThousand 是否保留千分位
 * @param {string} divider 千分位的分隔符
 */
function MoneyFormat(num, fix, isThousand, divider) {
  if (!num) return "--";
  if (typeof fix == "string") {
    fix = Number(fix) || 0;
  }
  num = num.toString().replace(/\￥|\$|\,/g, ""); // 去除元数据中的 ￥、$、, 并转成字符串
  let sign = num == (num = Math.abs(num)); // true 为 正数，false 为 负数
  console.log("sign==", sign);
  num = Math.round(num * Math.pow(10, fix)); // 如果是负数需要使用，+0.50000000001 然后向下取整的方式保持整数，因为上面已经去符号变成了正数，因此可以直接使用round方法。
  let cents = num % Math.pow(10, fix).toString(); // 小数部分
  num = Math.floor(num / Math.pow(10, fix)).toString(); // 正数部分
  while (cents.length < fix) {
    cents = "0" + cents;
  }
  console.log("cents==", num, cents);
  if(isThousand == "true") {
    isThousand = true;
  }
  if (isThousand) {
    // let len = Math.floor( num.length )
    for (let i = 0; i < Math.floor((num.length - (i + 1)) / 3); i++) {
      num =
        num.substring(0, num.length - (4 * i + 3)) +
        (divider || ",") +
        num.substring(num.length - (4 * i + 3));
    }
  }
  return (sign ? "" : "-") + num + "." + cents;
}

const number = "-￥1912834998.823";
// console.log(MoneyFormat(number, "2", 'false', ""));
