/**
 * 青蛙跳台阶问题
 *
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
 *
 * 详细：https://leetcode-cn.com/leetbook/read/illustration-of-algorithm/57hyl5/
 * 相似：https://leetcode-cn.com/problems/climbing-stairs/
 *
 * 题解：https://leetcode-cn.com/problems/climbing-stairs/solution/pa-lou-ti-by-leetcode-solution/
 *
 */

/**
 * 
 * 动态规划
 * 
 * @param {number} n
 * @return {number}
 */
const numWays = function (n) {
  let p = 0, q = 0, r=1;
  for(let i=1;i<n;i++) {
    p = q;
    q = r;
    r = p + q;
  }
  return r
};
