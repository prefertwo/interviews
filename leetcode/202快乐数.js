/**
 * 编写一个算法来判断一个数 n 是不是快乐数。
 * 「快乐数」定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，
 * 也可能是 无限循环 但始终变不到 1。如果 可以变为  1，那么这个数就是快乐数。
 * 如果 n 是快乐数就返回 True ；不是，则返回 False 。
 *
 *
 * 重点：找到退出循环的界点，拿到退出循环的数字和1比较
 *
 *
 * 第一想法是：toString()转成字符串、split()拆分数组、reduce()对每项平方累加求和
 * 得到求和值，然后循环
 *
 *
 */

/**
 * 用 HashSet检测循环
 *
 * @param {number} n
 * @returns {boolean}
 *
 */
const isHappy = (n) => {
  if (n === 1) return true;
  let setData = new Set();
  // n在setData存在，说明陷入了循环
  while (!setData.has(n)) {
    setData.add(n);
    let sum = 0;
    while (n) {
      const d = n % 10; // 逐位拿出计算
      sum += d * d;
      n = Math.floor(n / 10); // 余下的各位
    }
    n = sum;
  }
  return n === 1; // 陷入循环的是1则快乐，不是1不快乐
};

console.log(isHappy(22));

/**
 * 快慢指针法：
 * 把执行结果的得到的数字看作是一个列表（链表），这里的快慢指针指的是每次运行之后得到的数字，慢指针初始值是 n ，快指针初始值是第一次执行的结果
 * 此后依次类推
 *
 * 如果是快乐数，最终快指针会先到 1
 * 如果不是快乐数，最终两个指针会在某个值相遇
 *
 */

const isHappy2 = (n) => {
  if (n === 1) return true;

  const next_num = (n) => {
    let sum = 0;
    // n==0是false
    while (n) {
      const d = n % 10;
      sum += d * d;
      n = Math.floor(n / 10);
    }
    return sum;
  };

  let slow_num = n;
  let fast_num = next_num(n);

  while (fast_num !== 1 && fast_num !== slow_num) {
    slow_num = next_num(slow_num);
    fast_num = next_num(next_num(fast_num));
  }

  return fast_num === 1;
};
