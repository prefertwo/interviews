/**
 * 旋转数组
 *
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 *
 * 详细：https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2skh7/
 *
 * 解析：https://leetcode-cn.com/problems/rotate-array/solution/xuan-zhuan-shu-zu-by-leetcode-solution-nipk/
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
  if (Object.prototype.toString.call(nums) === "[object Array]") {
    let len = nums.length;
    const num1 = nums.slice(0 - k);
    const num2 = nums.slice(0, len - k);
    nums = [...num1, ...num2];
  }
  return nums;
};

/**
 * for 循环 k 次
 */

const rotate2 = (nums, k) => {
  if (Object.prototype.toString.call(nums) === "[object Array]") {
    for (let i = 0; i < k; i++) {
      const item = nums.pop();
      nums.unshift(item);
    }
    console.log(nums);
  }
};

const arr = [1, 2, 3, 4, 5, 6, 7];
rotate2(arr, 3);

/**
 *
 * @param {number[]} nums
 * @param {number} k
 */
const rotate3 = (nums, k) => {
  let len = nums.length;
  const arr = new Array(len);
  for (let i = 0; i < len; i++) {
    arr[(i + k) % len] = nums[i]; // ✓
  }
  for (let j = 0; j < len; j++) {
    nums[j] = arr[j];
  }
};
