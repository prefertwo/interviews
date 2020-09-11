### 接口

TS 的核心原则之一就是对值所具有的结构进行类型检查。TypeScript 里，接口的作用就是为这些类型命名和为你的代码或者第三方代码定义契约。

```
interface labelValue {
  label: string
}

function printLabel (obj:labelValue) {
  //
}

printLabel({label: '12'})
```

上面代码就是使用 `interface` 关键字来定义一个接口。它表示一个对象拥有 label 属性，且值为字符串类型。`printLabel`函数接受一个对象，并且这个对象参数必须和定义的接口一致，即拥有 label 属性且值为字符串形式。

1. 可选属性
   接口里的属性不全是必需的，有些可能某些条件存在，有些可能一直不存在。此时就需要使用可选属性。使用很简单，如下：

```
interface labelValue {
  label: string,
  name?: string
}
```

此时，label 为必需属性，name 为可选属性。
可选属性的好处之一：可以对可能存在的属性进行预定义。之二：可以捕获引用了不存在属性的错误。

2. 只读属性
   某些对象的属性，可能只能在初始化时赋值，以后都不允许修改。此时可以设置为只读属性。

```
interface labelValue {
  label: string,
  name?: string,
  readonly age: number
}

function printLabel (obj:labelValue) {
  //
  obj.age = 22; // Cannot assign to 'age' because it is a read-only property
}

printLabel({label: '12', name: 'guo', age: 12});
```

TS 里有 `ReadonlyArray<T>` 类型，它与 `Array<T>` 相似，只是把所有可变方法去掉了，因此可以确保创建的数组不会被更改。

```
let arr: number[] = [1, 2, 3, 5, 4];
let otherArr: ReadonlyArray<number> = arr;
otherArr[3] = 32; // Index signature in type 'readonly number[]' only permits reading
otherArr.push(4); // Property 'push' does not exist on type 'readonly number[]'
arr = otherArr; // error
arr = otherArr as number[] ; // ok 使用类型断言重写
arr = <number[]>otherArr; // 类型断言的两种写法

```

3. 函数类型
   接口能够描述 JavaScript 中对象拥有的各种外形，函数也不例外。
   为了使用接口描述函数类型，我们需要给接口定义一个调用签名。它就像是一个只有参数列表和返回值的函数定义，参数列表每个参数都要有名字和类型：

```
interface SearchFun {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFun;
mySearch = function(source: string, subString: string) {
  let res = source.search(subString)
  return res > -1
}

```

4. 可索引类型
   可索引类型有一个 **_ 索引签名 _** ，它描述了对象索引的类型，和相应的索引返回值的类型。

```
interface stringNumber {
  [index: number]: string
}

let myArr: stringNumber = ['tom', 'jerry']
let myStr: string = myArr[0]

```

TS 有两种索引签名：字符串和数字。可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。

```
interface NumberDictionary {
  [index: string]: number;
  length: number;    // 可以，length是number类型
  name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配。
  // Property 'name' of type 'string' is not assignable to string index type 'number'
}
```

你可以设置为只读索引签名

```
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
myArray[2] = "Mallory"; // error!
// Index signature in type 'ReadonlyStringArray' only permits reading
```

5. 类类型

- 实现接口
  TS 能够用它来明确的强制一个类去符合某种契约。

```
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date); // 接口描述方法，类里去实现
}

class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) { }
}
```

接口描述了类的公共部分，它不会帮你检查是否含有某些私有成员。

**_ 继承接口 _**
和类一样接口也可以相互继承。这让我们可以从一个接口复制成员到另一个接口，将接口更灵活的分隔到可重用的模块里。

```
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let  square: Square = {
  color: '#fff',
  sideLength: 2
}
// let square = <Square>{};
// square.color = "blue";
// square.sideLength = 10;
```

一个接口可以继承多个接口，创建出多个接口的合成接口。

```
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square2: Square = {
  color: 'blue',
  sideLength: 2,
  penWidth: 2
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

```

6. 混合类型
   一个对象可以同时作为函数和对象使用，并带有额外属性：

```
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) { };
  counter.interval = 123;
  counter.reset = function () { };
  return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
```

7. 接口继承类
   当接口继承一个类时，会继承类的成员，但是不会继承其实现。类似于声明了所有类中存在的成员，并没有提供具体实现。接口同样会继承到类的 private 和 protected 成员。 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）。

```
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

// 错误：“Image”类型缺少“state”属性。
class Image implements SelectableControl {
    select() { }
}

```
