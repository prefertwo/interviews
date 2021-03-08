/**
 * 两个数组的交集 II
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 *
 *
 * 详情：https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2y0c2/
 *
 * 题解：https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/solution/liang-ge-shu-zu-de-jiao-ji-ii-by-leetcode-solution/
 *
 */

/**
 * 哈希表
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const intersect = (nums1, nums2) => {
  const len1 = nums1.length,
    len2 = nums2.length;
  let hash = {}, // 第一个数组的元素，及其出现次数
    arr = []; // 两个数组的交集

  // 循环第一个数组记录出现次数
  for (let i = 0; i < len1; i++) {
    const item = nums1[i];
    if (hash[item]) {
      hash[item] += 1;
    } else {
      hash[item] = 1;
    }
  }

  // 循环第二个，找出交集
  for (let j = 0; j < len2; j++) {
    const item = nums2[j];
    if (hash[item]) {
      hash[item] -= 1;
      arr.push(item);
    }
  }

  return arr;
};

/**
 * 排序 + 双指针(使用双指针需要先排序)
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect2 = (nums1, nums2) => {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  // console.log(nums1, nums2);
  const len1 = nums1.length,
    len2 = nums2.length;

  let res = [],
    index1 = 0,
    index2 = 0;
  // 移动较小值的指针。相等则存储数值，同时推动两个指针。for循环代码会稍微复杂一些
  while (index1 < len1 && index2 < len2) {
    if (nums1[index1] < nums2[index2]) {
      index1++;
    } else if (nums1[index1] > nums2[index2]) {
      index2++;
    } else {
      res.push(nums1[index1]);
      index1++;
      index2++;
    }
  }
  return res;
};

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];

const nums3 = [4, 9, 5],
  nums4 = [9, 4, 9, 8, 4];
console.log(intersect2(nums3, nums4));
