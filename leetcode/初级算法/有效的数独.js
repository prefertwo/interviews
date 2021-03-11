/**
 * 有效的数独
 *
 * 判断一个 9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。
 * 数字 1-9 在每一行只能出现一次。
 * 数字 1-9 在每一列只能出现一次。
 * 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 *
 * 详情：https://leetcode-cn.com/problems/valid-sudoku/
 *
 * 题解：https://leetcode-cn.com/problems/valid-sudoku/solution/you-xiao-de-shu-du-by-leetcode/
 *
 */

/**
 * 一次迭代
 *
 * @param {character[][]} board
 * @return {boolean}
 *
 */

const isValidSudoku = function (board) {
  let boxs = new Array(9).fill(0).map((i) => new Map());
  let rows = new Array(9).fill(0).map((i) => new Map());
  let cols = new Array(9).fill(0).map((i) => new Map());

  for (let i = 0; i < 9; i++) {
    // 行
    for (let j = 0; j < 9; j++) {
      // 列
      const num = board[i][j];
      if (num !== ".") {
        const box_index = Math.floor(i / 3) * 3 + Math.floor(j / 3); // 当前处于第几个小格子
        if (rows[i].has(num) || cols[j].has(num) || boxs[box_index].has(num)) {
          return false;
        }
        rows[i].set(num, 1);
        cols[j].set(num, 1);
        boxs[box_index].set(num, 1);
      }
    }
  }
  return true
};
