### 函数

#### 为函数定义类型

我们可以给每个参数添加类型之后再为函数本身添加返回值类型。TypeScript 能够根据返回语句自动推断返回值的类型。因此一般可忽略。

```

function add(x: number, y: number): number {
  return x + y
}

const add2 = (x: number, y: number): number => {
  return x + y
}

```

如果函数没有返回任何值，你也必须指定返回值类型为 void 而不能留空。

函数的完整类型。

```
let myAdd: (x: number, y: number) => number =
    function(x: number, y: number): number { return x + y; };
```

我们在函数和返回值类型之前使用( =>)符号，使之清晰明了。

#### 推断类型

TS 可以‘按上下文归类’自动识别类型

```
let myAdd3 = function(x: number, y: number): number { return x + y; };

// The parameters `x` and `y` have the type number
let myAdd4: (baseValue: number, increment: number) => number =
    function(x, y) { return x + y; };
```

#### 可选参数、默认参数

TS 里传递给一个函数的参数个数必须与函数期望的参数个数一致。TS 里 通过`?`来实现可选参数功能。可选参数必须跟在必须参数后面。

```
// 可选参数
function addFun(x:number, y?:number) {
  if(y) {
    return x+y;
  }
  return x;
}
addFun(2)

// 默认参数
function addFun(x: number, y = 10) {
  return x + y;
}
console.log(addFun(2)); // output：12

// 剩余参数
function reseParams(x:number, ...rest:number[]) {
  return x + rest.reduce((a, b) => a+b)
}
console.log(reseParams(1,2,3,4,5)); // output：15

```

箭头函数能保存函数创建时的 this 值，而不是调用时的值。

_this 理解的不够深入，暂时不写_
