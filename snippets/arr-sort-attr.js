/**
 * 对象数组，多个属性排序
 */
let arr = [
  {
    age: 11,
    class: 1
  },{
    age: 29,
    class: 2
  },{
    age: 13,
    class: 1
  },{
    age: 26,
    class: 2
  },{
    age: 21,
    class: 2
  },{
    age: 15,
    class: 1
  },{
    age: 17,
    class: 1
  },{
    age: 22,
    class: 2
  }
];

function sortMoreAttr(arr) {
  arr.sort((a,b) => {
    if(a.class == b.class) {
      return a.age - b.age;
    } else {
      return a.class - b.class;
    }
  })
}

sortMoreAttr(arr);
console.log(arr)
