/**
 * 旋转图像
 *
 * 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
 * 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。
 *
 * 详细：https://leetcode-cn.com/problems/rotate-image/
 *
 * 题解：https://leetcode-cn.com/problems/rotate-image/solution/xuan-zhuan-tu-xiang-by-leetcode-solution-vu3m/
 *
 */

/**
 * 方法一：使用辅助数组
 *
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate1 = function (matrix) {
  const len = matrix.length;
  /* 第一行 变为 倒数第一列，最后一行 变为 第一列 */
  const matrix_new = new Array(len).fill(0).map(() => new Array(len).fill(0));

  // 行
  for (let i = 0; i < len; i++) {
    // 列
    for (let j = 0; j < len; j++) {
      matrix_new[j][len - 1 - i] = matrix[i][j];
    }
  }

  // 直接=，会有引用关系发生
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      matrix[i][j] = matrix_new[i][j];
    }
  }

  console.log(matrix);
};

/**
 * 方法二：原地旋转
 *
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate2 = function (matrix) {};

/**
 * 方法三：用翻转代替旋转
 *
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate3 = function (matrix) {};

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rotate1(arr);
