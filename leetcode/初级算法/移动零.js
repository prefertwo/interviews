/**
 * 移动零
 *
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *
 * 详细：https://leetcode-cn.com/problems/move-zeroes/
 *
 * 题解：https://leetcode-cn.com/problems/move-zeroes/solution/yi-dong-ling-by-leetcode-solution/
 *
 */

/**
 * 双指针：左指针左侧都是非0，右指针左侧到左指针都是0，当右指针到达 len 时，结束
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 *
 */
const moveZeroes = (nums) => {
  const len = nums.length;
  if (len < 2) return nums;

  let left = 0, // 遍历
    right = 0;

  while (right < len) {
    if (nums[right]) {
      const temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
    }
    right++;
  }
  // console.log(nums);
};

const nums = [1, 0, 0, 3, 2, 0, 4];
moveZeroes(nums);
