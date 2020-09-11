### TS 基础类型

#### 基础类型

1. 布尔值

```
let isFinish: boolean = true;
```

2. 数字类型

```
const staticNumber: number = 12;
```

3. 字符串

```
const name: string = 'Jerry';
```

4. 数组
   有两种方式定义

```
// 第一种
let ages: number[] = [12, 21, 18];

// 第二种
let names: Array<string> = ['tom', 'jerry'];
```

5. 元组
   元组（Tuple）允许表示一个已知元素类型和数量的数组。

```
let st: [string, number];
// st 是一个数组，第一个元素只能是字符串类型。第二个元素只能是数字类型。
// 越界元素会使用联合类型替代。比如，第三个完后的元素既可以是字符串也可以是数字。
```

6. 枚举
   枚举（enum）类型是对 JavaScript 标准数据类型的一个补充。使用枚举可以为一组数据赋予友好的名字。

```
enum Color {Red, Green, Blue}
let c: Color = Color.Green; // 默认从 0 开始编号。也可手动指定开始值，也可以全部手动指定。
enum Direction {UP = 1, RIGHT, DOWN, LEFT}
// 可以通过 Direction.UP 得到 1，也可以通过 Direction[1] 得到 UP
```

7. Any
   对于不希望类型检查器对某些值进行检查而直接让他们通过编译，则可以使用`any`来标记。尤其对于项目改造时，很有用。

```
// 定义一个数组，但是不确定里面有那些数据类型
let arr: any[] = [1, 'tom', true, {}];
```

8. void
   某种程度来说，与 any 正好相反，表示没有任何类型。通常用于函数的返回值。
   声明一个 void 类型的变量，你只能为它赋予 undefined 和 null，因此没啥大用。

```
function warnUser(): void {
  console.log('This is a function')
}
```

9. Null 和 Undefined
   TypeScript 里，这两者有各自的的类型分别为 undefined 和 null。默认情况下，这两者是所有类型的子类型。你可以赋值给 number 类型的变量。
   然后，当指定`--strictNullChecks`标记，则只能赋值给 void 和它们各自。
10. Never
    never 表示那些永不存在的值的类型。例如，never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；变量也可能是 never 类型，当它们被永不为真的类型保护所约束时。
11. Object
    object 表示非原始类型，使用 object 可以很好的表示 Object.create 这样的 API。

```
declare function create(o: object | null): void;

create({prop: 0}) // OK
create(null) // OK
create(23) // Error
create('tom') // Error
create(false) // Error
create(undefined) // Error
```

12. 类型断言
    就是你比编译器更知道它确切的类型。有两种写法：尖括号 和 as

```
let someValue: string = 'this is string';
let strLength: number = (<string>someValue).length;
// 或
let strLength: number = (someValue as string).length;
```

然而，当你在 TypeScript 里使用 JSX 时，只有 as 语法断言是被允许的。
