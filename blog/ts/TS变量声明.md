### 变量声明

尽量使用`let`、`const` 来声明变量和常量。

### 解构

1. 数组解构

```
const names = ['tom', 'jerry'];
const [first, second] = names;
console.log(first) // outputs 'tom'
console.log(second) // outputs 'jerry'
```

利用 ... 创建剩余变量

```
const [a, ...rest] = [1, 2, 3, 4];
console.log(a) // outputs 1
console.log(rest) // outputs [2, 3, 4]
```

2. 对象解构

```
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
}

let {a, b, ...me} = obj;
// 对于不需要的属性可以忽略。也可以利用 ...创建剩余变量
// me 输出 { c: 3, d: 4, e: 5 }
```

也可以给属性重命名

```
const obj1 = {
  a: 1,
  b: 2,
  c: 3,
}
const {a: newA, b:newB, e=100} = obj1;
console.log(newA); // 1
console.log(newB); // 2
console.log(e); // 100 // 默认值

```

3. 函数声明

```
function f({ a, b = 0 } = { a: "" }): void {
  // ...
}
f({ a: "yes" }); // ok, default b = 0
f(); // ok, default to {a: ""}, which then defaults b = 0
f({}); // error, 'a' is required if you supply an argument
```

4. 展开
   展开数组：

```
let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];
// output [0, 1, 2, 3, 4, 5]
```

展开对象：

```
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };
// output { food: "rich", price: "$$", ambiance: "noisy" } // food 的值取决于展开的顺序。
```

对象展开还有其它一些意想不到的限制。 首先，它仅包含对象 自身的可枚举属性。会丢失掉方法。
