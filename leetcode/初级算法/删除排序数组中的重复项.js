/**
 * 删除排序数组中的重复项
 *
 * 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 *
 * 详情：https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2gy9m/
 *
 */

/**
 * @param {number[]} nums 入参
 * @return {number} 输出不重复个数
 */
const removeDuplicates = function (nums) {
  if (Object.prototype.toString.call(nums) !== "[object Array]") return;

  const len = nums.length;
  let count = 1;

  for (let i = 1; i < len; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    nums[count] = nums[i];
    count++;
  }
  console.log(nums);
  return count;
};

const arr = [1, 1, 1, 2, 3, 3];

console.log(removeDuplicates(arr));

// [ 1, 2, 3, 2, 3, 3 ]
// 3

/**
 * 因为给定的是排序数组，所以可以比较当前和前一个，如果相等则跳过，继续下一组比较，如果不等，则把后面一项，放到 count 位置，然后 count + 1，target 数组长度 + 1
 *
 * 为什么不用当前和下一个比较呢？
 * 因为会比较到 undefined，需要更多的判断条件
 *
 */
