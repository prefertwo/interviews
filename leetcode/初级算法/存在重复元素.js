/**
 * 存在重复元素
 *
 * 给定一个整数数组，判断是否存在重复元素。
 * 如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。
 *
 *
 * 详细：https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x248f5/
 *
 * 题解：https://leetcode-cn.com/problems/contains-duplicate/solution/cun-zai-zhong-fu-yuan-su-by-leetcode-sol-iedd/
 *
 */

/**
 * 排序，判断相邻元素是否相等
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == nums[i + 1]) return true;
  }
  return false;
};

/**
 *
 * 利用 set 数据结构无重复项的特性 .size 和 原来的 .length 比较
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate2 = function (nums) {
  return new Set(nums).size !== nums.length;
};
