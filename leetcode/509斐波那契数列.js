/**
 * 通常用 F(n) 表示，形成的序列称为斐波那契数列。
 * 该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
 * F(0) = 0,   F(1) = 1
 * F(N) = F(N - 1) + F(N - 2), 其中 N > 1
 *
 * 有 6 种方法：递归、记忆化自底向上的方法、记忆化自顶向下的方法、自底向上进行迭代、矩阵求幂、公式法
 *
 */

/**
 * 迭代（递归）
 * @param {number} N
 * @returns {number}
 */
const fib1 = (N) => {
  if (N > 1) {
    return fib(N - 1) + fib(N - 2);
  } else {
    return N;
  }
};

/**
 * 记忆化自底向上的方法
 *
 * @param {number} N
 * @returns {number}
 */
const fib2 = (N) => {
  if (N < 2) {
    return N;
  }
  const memoize = (N) => {
    let arrT = [0, 1];
    for (let i = 2; i <= N; i++) {
      arrT[i] = arrT[i - 1] + arrT[i - 2];
    }
    return arrT[N];
  };
  return memoize(N);
};

/**
 * 记忆化自顶向下的方法
 * 我们先计算存储子问题的答案，然后利用子问题的答案计算当前斐波那契数的答案。
 * 我们将递归计算，但是通过记忆化不重复计算已计算的值。
 * @param {number} N
 * @returns {number}
 */
const fib3 = (N) => {
  let arrT = [0, 1, 1];
  if (N <= 2) {
    return arrT[N];
  }
  const memoize = (N) => {
    if (N < 0) return;
    if (N < 3) return arrT[N];
    if (arrT[N]) {
      return arrT[N];
    }
    arrT[N] = memoize(N - 1) + memoize(N - 2);
    console.log(arrT);

    return arrT[N];
  };
  return memoize(N);
};

// 自底向上进行迭代，设置一个暂存值
const fib4 = (N) => {
  if (N < 2) return N;
  let current,
    prev1 = 0,
    prev2 = 1;
  for (let i = 2; i <= N; i++) {
    current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
  }
  return current;
};
console.log(fib4(10));

// 矩阵求幂：斐波那契数列矩阵方程（高数没学好）

// 公式法：黄金分割比
// https://demonstrations.wolfram.com/GeneralizedFibonacciSequenceAndTheGoldenRatio/
