/**
 * 剑指offer面试题11：数值的整数次方。
 * 实现函数 double Power(double base, int exponent), 求 base 的 exponent 次方。
 * 不得使用库函数，同时不需要考虑大数问题。
 * 测试用例：把底数和指数分别设为正数、负数、和零。
 */
/**
 * 最直观的第一想法。但是显然不全面，没有考虑exponent < 0 的情况。(int exponent 是整数)
 */
function Power1(base, exponent) {
  let result = 1;
  if (exponent >= 0 && Number.isInteger(exponent)) {
    for (let i = 0; i < exponent; i++) {
      result *= base;
    }
  }
  return result;
}

console.log(Power1(2, 10));

