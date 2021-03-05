/**
 * 买卖股票的最佳时机 II
 *
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 *
 * 详情：https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2zsx1/
 *
 * 题解：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/solution/mai-mai-gu-piao-de-zui-jia-shi-ji-ii-by-leetcode-s/
 *
 */

/**
 * 假设：[1,2,3,5,3,6]
 * 则是第1天买入（1），第4天卖出（5），只要是遇到值变小，则前一个卖出
 * 第一次买卖利益 = 5 - 1 =4，同样还有每一天的利润和算法: 利益 = 2-1 + 3-2 + 5-3 == 4
 *
 * 第 5 天买入（3），第6天卖出（6）
 * 第二次买卖利益 = 6-3
 *
 * 总结：后一天比前一天值大，则获利，值小则不操作。
 *
 */

/**
 *
 * 贪心算法，假设每天都交易
 * @param {number[]} prices
 * @return {number} 最大收益值
 */
var maxProfit = function (prices) {
  if (Object.prototype.toString.call(prices) !== "[object Array]") return;

  let profit = 0;
  let len = prices.length;

  if (len >= 2) {
    for (let i = 0; i < len - 1; i++) {
      if (prices[i] < prices[i + 1]) {
        profit = profit + prices[i + 1] - prices[i];
      }
    }
  }

  // 上面判断可以不用写，但是要比较每天交易的最大值，如果prices[i+1] - prices[i] > 0 则交易，否则不交易
  // 代码如下
  // for (let i = 1; i < len - 1; i++) {
  //   profit = profit + Math.max(0, prices[i] - prices[i - 1]);
  // }

  return profit;
};

/**
 * 动态规划
 * 二维数组：dp[i][0] 表示第 i 天不持有获利最大，dp[i][1] 表示第 i 天持有获利最大
 *
 */

const maxProfit = (prices) => {
  if (Object.prototype.toString.call(prices) !== "[object Array]") return 0;
  let profit = 0;

  const len = prices.length;
  const dp = new Array(len).fill(0).map((v) => new Array(2).fill(0));
  // 初始值
  (dp[0][0] = 0), (dp[0][1] = -prices[0]);

  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  return dp[len - 1][0];
};
