/**
 * 给定一个数组 candidates 和一个目标数 target ，
 * 找出 candidates 中所有可以使数字和为 target 的组合。
 * 说明：
 *    所有数字（包括目标数）都是正整数。
 *    解集不能包含重复的组合。
 */

/**
 * 输入: candidates = [10,1,2,7,6,1,5], target = 8,
 * [
 *   [1, 7],
 *   [1, 2, 5],
 *   [2, 6],
 *   [1, 1, 6]
 * ]
 *
 * 输入: candidates = [2,5,2,1,2], target = 5,
 * [
 *   [1,2,2],
 *   [5]
 * ]
 *
 */

//  递归 ? 去重 ?
/**
 *
 * @param {number[]} candidates
 * @param {number} target
 * @returns {number[][]}
 */

var combinationSum2 = function (candidates, target) {
  let resultArr = [];
  const itemArr = (start, arrT, sum) => {
    for (let i = start; i < originArr.length; i++) {
      if (sum + originArr[i] === target) {
        arrT.push(originArr[i]);
        resultArr.push(arrT);
      } else if (sum + originArr[i] < target) {
        console.log("arrT==", arrT);
        const arrA = arrT.push(originArr[i]);
        itemArr(i, arrA, sum + originArr[i]);
      }
    }
  };

  itemArr(0, [], 0);
};

const arr = [1, 2, 3, 4, 5];
combinationSum2(arr, 8);


