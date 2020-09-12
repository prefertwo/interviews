/**
 * 给定一个非空二叉树, 返回一个由每层节点平均值组成的数组。
 *
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 *
 * 可以将每个树节点看成是一个对象，对象结构如下
 *
 */
const TreeNode = {
  val: "值",
  left: "左节点",
  right: "右节点",
};

/**
 * 广度优先搜索(BFS)
 * @param {TreeNode} root
 * @returns {number[]}
 */
const averageOfLevels = (root) => {
  if (!root) return [];
  const quene = [root];
  const res = [];
  // 当节点不为空，就一直执行
  while (quene.length) {
    let sum = 0;
    const size = quene.length;
    for (let i = 0; i < size; i++) {
      const item = quene.shift(); // 遍历完之后，原来的一层树节点也取完了
      sum += item.val;
      if (item.left) {
        quene.push(item.left);
      }
      if (item.right) {
        quene.push(item.right);
      }
    }
    res.push(sum / size);
  }
  return res;
};
/**
 * 复杂度分析：n为二叉树结点个数，h为二叉树高度
 *  时间复杂度: O(n)
 *    广度优先需对每个结点访问一次，时间复杂度为 O(n)
 *    对每一层的就算平均值，时间复杂度为 O(h)，任何情况下，h < n, 所以为 O(n)
 *  空间复杂度: O(n)
 *    空间复杂度取决于队列开销，队列中的节点个数不会超过n
 */

/**
 * 深度优先搜索(DFS)
 * @param {TreeNode} root
 * @returns {number[]}
 */
const averageOfLevels2 = (root) => {
  const res = []; // 返回值
  const counts = []; // 每层的节点数
  const sums = []; // 每层的节点和

  const defn = (root, level, counts, sums) => {
    if (!root) return [];
    if (level < sums.length) {
      // 对同层级第一个左子树执行之后，再对又子树执行会走这里
      sums[level] = sums[level] + root.val;
      counts[level] = counts[level] + 1;
    } else {
      // 执行某层第一个左子树，此时和就是值，数量是第一个
      sums[level] = root.val;
      counts[level] = 1;
    }
    defn(root.left, level + 1, counts, sums);
    defn(root.right, level + 1, counts, sums);
  };

  defn(root, 0, counts, sums);
  const len = sums.length;
  for (let i = 0; i < len; i++) {
    res.push(sums[i] / counts[i]);
  }
  return res;
};
/**
 * 复杂度分析：
 *  时间复杂度：O(n)
 *    深度优先搜索需要对每个节点访问一次，对于每个节点，维护两个数组的时间复杂度都是 O(1)
 *    遍历结束之后计算每层的平均值的时间复杂度是 O(h)
 *  空间复杂度：O(n)
 *    空间复杂度取决于两个数组的大小和递归调用的层数，数组大小等于树的高度，递归的层数小于等于树的高度。
 *    最差的情况是二叉树的高度等于节点个数，即 n===h。复杂度考虑的是最坏的情况，因此为 O(n) 而不是 O(h)
 */
