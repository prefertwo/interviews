/**
 * 剑指offer面试题65：滑动窗口的最大值
 *
 * 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
 *
 * 详细：https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/
 *
 * 题解：https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/solution/mian-shi-ti-59-i-hua-dong-chuang-kou-de-zui-da-1-6/
 *
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function (nums, k) {
  let arr = [];
  if (nums.length === 0 || k === 0) return arr;
  const len = nums.length - k > 0 ? nums.length - k : 0;

  for (let i = 0; i < len + 1; i++) {
    const item = nums.slice(i, i + k);
    console.log(item);
    arr.push(Math.max(...item));
  }
  return arr;
};

const nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;
console.log(maxSlidingWindow(nums, k));
