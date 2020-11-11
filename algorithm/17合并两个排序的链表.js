/**
 * 剑指offer面试题17：合并两个排序的链表。
 * 输入两个排序递增的链表，合并这两个链表并使合并后的链表依然是递增排序。
 * 链表和数组类似，但是各有所长。
 * 数组在内存中是连续的，链表不是连续的。
 * 链表的每个节点除了保存数据还保存着链表下一结点的内存地址。
 * 因此链表相对于数组的好处是，可以将数据分散到各处，不用寻找连续的地址。
 */

function MergeOrderList(arrA, arrB) {
  if (!arrA || arrA.length === 0) return arrB;
  if (!arrB || arrB.length === 0) return arrA;
  let len = arrA.length + arrB.length;
  let arrT = [];
  // let len = arrA.length > arrB.length ? arrA.length : arrB.length;
  let indexA = 0;
  let indexB = 0;
  while (indexA < arrA.length || indexB < arrB.length) {
    if (arrA[indexA] < arrB[indexB]) {
      arrT.push(arrA[indexA]);
      indexA++;
    }
    if (arrA[indexA] > arrB[indexB]) {
      arrT.push(arrB[indexB]);
      indexB++;
    }
    if (arrA[indexA] == arrB[indexB]) {
      arrT.push(arrA[indexA], arrB[indexB]);
      indexA++;
      indexB++;
    }
    if (!arrA[indexA] && arrB[indexB]) {
      arrT.push(arrB[indexB]);
      indexB++;
    }
    if (!arrB[indexB] && arrA[indexA]) {
      arrT.push(arrA[indexA]);
      indexA++;
    }
    if (!arrA[indexA] && !arrB[indexB]) break;
  }
  return arrT;
}

const arrA = [1, 5, 9];
const arrB = [2, 3, 7, 11, 13, 14, 15, 16, 17];
console.log(MergeOrderList(arrA, arrB));
