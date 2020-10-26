/**
 * 有多少小于当前数字的数字
 *
 * 给你一个数组 nums，对于其中每个元素 nums[i]，请你统计数组中比它小的所有数字的数目。
 * 换而言之，对于每个 nums[i] 你必须计算出有效的 j 的数量，其中 j 满足 j != i 且 nums[j] < nums[i] 。
 *
 * 以数组形式返回答案。
 *
 */

/**
 * 输入：nums = [8,1,2,2,3]
 * 输出：[4,0,1,1,3]
 *
 * 解释：
 * 对于 nums[0]=8 存在四个比它小的数字：（1，2，2 和 3）。
 * 对于 nums[1]=1 不存在比它小的数字。
 * 对于 nums[2]=2 存在一个比它小的数字：（1）。
 * 对于 nums[3]=2 存在一个比它小的数字：（1）。
 * 对于 nums[4]=3 存在三个比它小的数字：（1，2 和 2）。
 *
 */

/**
 * 双层循环法
 * @param {number[]} arr
 * @returns {number[]}
 */
const smallerNumbersThanCurrent = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i];
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (cur > arr[j]) {
        count++;
      }
    }
    res.push(count);
  }
  return res;
};

/**
 * 计数排序
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent2 = function (nums) {
  const max = Math.max(...nums); // 找到最大值，则新数组只需这么大
  const arr = new Array(max + 1).fill(0);
  nums.forEach((num) => arr[num]++); // 此时，以原数组值为下标，下标对应的值为该值的个数
  // 此时，求 小于 i 的数字个数，只需将 arr 前 i-1 个累加即可
  console.log(arr);
  // 声明初始对象，也可以是数组
  let map = {
    0: 0,
  };
  for (let i = 1; i <= max; i++) {
    // 小于当前的值 的个数 = 小于前一个值的个数 + 前一个值自身的个数
    map[i] = map[i - 1] + arr[i - 1];
  }
  return nums.map((num) => map[num]);
};

const arr = [8, 1, 2, 2, 3];
console.log(smallerNumbersThanCurrent2(arr));
