function test(fruit) {
  if (fruit == "apple" || fruit == "orange") {
    console.log("red");
  }
}

function test2(fruit) {
  const redFruits = ['apple', 'cherry', 'strawberry'];
  console.log(redFruits.includes('appe'))
  if(redFruits.includes(fruit)) {
    console.log('red')
  } else {
    console.log('blue')
  }
}

test2("strawbrry");

function test4(fruit, quantity) {
  if(!fruit) return;
  const q = quantity || 0;
  console.log(`we have ${q} ${fruit}!`)
}

test4('banana');  // we have 0 banana!
test4('apple', 3);  // we have 3 apple!

function test5(fruit, quantity = 1) {
  if(!fruit) return;
  const q = quantity || 0;
  console.log(`we have ${quantity} ${fruit}!`)
}
test5('banana');  // we have 1 banana!
test5('apple', 3);  // we have 3 apple!

function test6(fruit) {
  if(fruit && fruit.name) {
    console.log(fruit.name);
  } else {
    console.log('unknown')
  }
}
test6(undefined); // unknown
test6({ });  // unknown
test6({name: 'apple', color: 'red'}); // apple

// 解构 -- 只得到name属性。默认参数为空对象 {}
function test7({name} = {}) {
  console.log(name || 'unknown');
}
test7(undefined); // unknown
test7({ });  // unknown
test7({name: 'apple', color: 'red'}); // apple

function test8(color) {
  switch(color) {
    case 'red':
      return ['apple', 'strawberry'];
    case 'yellow':
      return ['banana', 'pineapple'];
    case 'purple':
      return ['grape', 'plum'];
    default:
      return [];
  }
}
console.log(test8(null)); // []
console.log(test8(undefined)); // []
console.log(test8('red')); // [ 'apple', 'strawberry' ]

const fruitColor = {
  red: ['apple', 'strawberry'],
  yellow: ['banana', 'pineapple'],
  purple: ['grape', 'plum']
};
function test9(color) {
  return fruitColor[color] || [];
}
console.log(test9(null)); // []
console.log(test9(undefined)); // []
console.log(test9('red')); // [ 'apple', 'strawberry' ]

// 使用Map找到对应颜色的水果
const fruitColors = new Map().set('red', ['apple', 'strawberry']).set('yellow', ['banana', 'pineapple']).set('purple', ['grape', 'plum']);
console.log(fruitColors.get('red'))
function test10(color) {
  return fruitColors.get(color) || [];
}
console.log(test10(null)); // []
console.log(test10(undefined)); // []
console.log(test10('red')); // [ 'apple', 'strawberry' ]

const fruits = [
  {
    name: 'apple',
    color: 'red'
  },
  {
    name: 'banana',
    color: 'yellow'
  },
  {
    name: 'grape',
    color: 'purple'
  },
  {
    name: 'orange',
    color: 'yellow'
  }
];
function test14() {
  const isAngRed = fruits.some(f => f.color == 'red');
  console.log(isAngRed)
}
test14() // true

function test13() {
  const isAllRed = fruits.every(f => f.color == 'red');
  console.log(isAllRed);
}
test13()





function test11(color) {
  // 使用 Array.filter 方法
  return fruits.filter(f => f.color == color)
}
// console.log(test11('yellow')); // [ { name: 'banana', color: 'yellow' },{ name: 'orange', color: 'yellow' } ]
function test12() {
  let isAllRed = true;
  for(let f of fruits) {
    if(!isAllRed) break;
    isAllRed = (f.color == 'red');
  }
  console.log(isAllRed);
}
test12() // false

// take me hand


