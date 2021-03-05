/**
 * 只出现一次的数字
 *
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 说明：你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 *
 * 详细：https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x21ib6/
 *
 * 题解：https://leetcode-cn.com/problems/single-number/solution/zhi-chu-xian-yi-ci-de-shu-zi-by-leetcode-solution/
 *
 */

/**
 * 使用 位运算符，“消消乐” 相同为0，相异为1,这里有个条件，如果每个元素出现的不是偶数次则不可以使用了
 * 所以，此方法不通用
 *
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  let num = 0;
  for (let i = 0; i < nums.length; i++) {
    num = num ^ nums[i];
  }
  return num;
};

/**
 * 利用 indexOf 方法判断
 */

const singleNumber2 = (nums) => {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const item = nums[i];
    // 向前找，向后找都没有，则只出现一次
    if (nums.indexOf(item, i + 1) === -1 && nums.lastIndexOf(item, i - 1)) {
      return item;
    }
  }
};

/**
 * 利用 filter 方法
 *
 * filter 返回的数组长度为1，则只出现了一次
 *
 */
const singleNumber3 = (nums) => {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const item = nums[i];
    const arr = nums.filter((cur) => item === cur);
    if (arr.length === 1) return arr.toString();
  }
};

/**
 * 使用 some 方法
 */

const singleNumber4 = (nums) => {
  const len = nums.length;
  let boolean;
  for (let i = 0; i < len; i++) {
    const cur = nums[i];
    boolean = nums.some((item, index) => {
      return item === cur && index !== i;
    });
    if (!boolean) {
      return cur;
    }
  }
};

const arr = [2, 2, 3, 4, 4];
console.log(singleNumber4(arr));
