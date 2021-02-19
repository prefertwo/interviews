/**
 * 给定一个单词和一个网格，找出单词是否在网格中。
 *
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。
 * 同一个单元格内的字母不允许被重复使用。
 *
 */

const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
const word1 = "ABCCED"; // returns true
const word2 = "SEE"; // returns true
const word3 = "ABCB"; // returns false
