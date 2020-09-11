### TS 枚举

使用枚举我们可以定义一组带名字的常量。使用枚举可以清晰的表达意图或者创建一组有区别的用例。

**数字枚举**

```
// 1初始化，其余自增。不初始化则从 0 开始
enum Direction {
  Up= 1,
  Right,
  Down,
  Left
}

console.log(Direction[3]); // output：Down
console.log(Direction.Left); // output：4
```

```
enum Response {
    No = 0,
    Yes = 1,
}

function respond(recipient: string, message: Response): void {
    // ...
}

respond("Princess Caroline", Response.Yes)
```

#### 字符串枚举

在一个字符串枚举里，每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化。

```
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
```

#### 异构枚举

从技术角度说，枚举可以混合字符串和数字成员。_不建议_

```
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}
```

#### 计算的和常量成员

每一枚举成员都带一个值，它可以是常量的，也可以是计算出来的。

```
enum FileAccess {
    // constant members
    None,
    Read    = 1 << 1,
    Write   = 1 << 2,
    ReadWrite  = Read | Write,
    // computed member
    G = "123".length
}
```

#### 联合枚举与枚举成员的类型

```
enum E {
  Foo,
  Bar,
}

function f(x: E) {
  if (x !== E.Foo || x !== E.Bar) {
    //             ~~~~~~~~~~~
    // Error! Operator '!==' cannot be applied to types 'E.Foo' and 'E.Bar'.
  }
}
```

我们先检查 x 是否不是 E.Foo。 如果通过了这个检查，然后 ||会发生短路效果， if 语句体里的内容会被执行。 然而，这个检查没有通过，那么 x 则 只能为 E.Foo，(因为已经限定了 x 为 E) 因此没理由再去检查它是否为 E.Bar

#### 运行时枚举

```
enum E {
    X, Y, Z
}

function f(obj: { X: number }) {
    return obj.X;
}

// Works, since 'E' has a property named 'X' which is a number.
f(E);
```

#### _反向映射_

反向映射，从枚举值到枚举名字（数字枚举成员）。
**_不会为字符串枚举生成反向映射_**

`const` 枚举
常量枚举通过在枚举上使用 const 修饰符来定义。常量枚举只能使用常量枚举表达式，并且不同于常规的枚举，它们在编译阶段会被删除。 常量枚举成员在使用的地方会被内联进来。 之所以可以这么做是因为，常量枚举不允许包含计算成员。

```
const enum Directions {
  Up,
  Down,
  Left,
  Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]
```
