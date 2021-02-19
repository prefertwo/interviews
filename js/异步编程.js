/**
 * 要求并行完成,同时并行的任务不能超过两个
 *
 * output: 2 3 1 4
 * 一开始，1、2 两个任务进入队列
 * 500ms 时，2 完成，输出 2，任务 3 进队
 * 800ms 时，3 完成，输出 3，任务 4 进队
 * 1000ms 时，1 完成，输出 1
 * 1200ms 时，4 完成，输出 4
 *
 */

/**
 * addTask(1000, '1');
 * addTask(500, '2');
 * addTask(300, '3');
 * addTask(400, '4');
 *
 */

 class AddTask {
   constructor() {
     this.tasks = [];
     this.taskingNumber = 0;
   }

   add() {
     this.tasks.push()
   }

 }























/**
 *
 * 有一个 函数数组，里面可能是同步，也可能是异步的 Promise
 * 怎么保持顺序执行并且让前一个函数的返回值作为后一个函数执行的参数
 *
 */

/* 
const fnList = [
  () => 1,
  (p) => Promise.resolve(p + 1),
  (p) => p + 2,
  (p) => Promise.resolve(p + 3),
  (p) => Promise.resolve(p + 4),
  (p) => p + 5,
  (p) => p,
];
 */
