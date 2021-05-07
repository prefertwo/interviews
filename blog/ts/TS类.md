### 类

传统的 JavaScript 程序使用函数和基于原型的继承来创建可重用的组件。ES6 之后，将能够使用基于类的面向对象的方式。

例子：

```
class Greet {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return `hello ${this.greeting}`
  }
}

let greeter = new Greet('Jerry');
```

上面代码，声明了一个类：Greet。这个类有 3 个成员，属性 greeting、构造函数、和方法 greet()。
最后一行，利用这个类创建了一个实例对象。会调用内部的 constructor 初始化，具有构造函数的属性和方法。

#### 继承

TS 里可以使用常用的面向对象模式。基于类的程序设计中一种最基本的模式是允许使用继承来扩展现有的类。

```
class Animal {
  // 声明类型并赋初始值
  move(distance: number = 0) {
    console.log(`Animal moved ${distance}`);
  }
}

class Dog extends Animal {
  bark() {
    console.log('汪 汪 汪');
  }
}

const dog = new Dog();
dog.move();
dog.bark();
```

这里 `Dog` 从 `Animal` 继承了属性和方法。`Dog` 是一个**派生类**，它通过 `extents`关键字派生自 `Animal` 基类。**派生类**通常被称作**子类**，基类通常被称作**超类**。

```
class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name)
  }
  move(distance = 5) {
    console.log("Slithering...");
    super.move(distance);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name)
  }
  move(distance = 40) {
    console.log("Galloping...");
    super.move(distance);
  }
}

let sam = new Snake('jerry');
let tom:Animal = new Horse('tom')

sam.move()
tom.move(882)
```

`Snake` 和 `Horse` 都继承了`Animal`。派生类包含一个构造函数，它**必须调用`super()`**，它会执行基类的构造函数。两个字类都重写了从 Animal 继承来的方法，使 move 根据不同的类，而具有不同的功能。tom 被声明为 Animal 类型，但因为它的值是 Horse，所以会调用 Horse 里重写的方法。
而且，在构造函数里访问 this 属性之前，一定要调用 `super()`。这个是 TS 强制执行的一条重要规则。

#### 公共、私有、受保护的修饰符

TS 里默认成员是 `public`类型的，你也可以将成员明确的标记为`public`

```
class Animal {
  public name: string;
  public constructor(theName: string) {
    this.name = theName;
  }
  public move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}`);
  }
}
```

**理解 `private`**
当成员被标记成 `private` 时，它就不能在声明它的类的外部访问到。

```
class Student {
  private name: string;
  constructor(theName:string) {
    this.name = theName
  }
  getName() {
    return this.name;
  }
}

new Student('jerry').name; // error
// Property 'name' is private and only accessible within class 'Student'
// 只能通过内部的`getName()`方法获取。
```

TypeScript 使用的是结构性类型系统。 当我们比较两种不同的类型时，并不在乎它们从何处而来，如果所有成员的类型都是兼容的，我们就认为它们的类型是兼容的。

然而，当我们比较带有 private 或 protected 成员的类型的时候，情况就不同了。 如果其中一个类型里包含一个 private 成员，那么只有当另外一个类型中也存在这样一个 private 成员， _并且它们都是来自同一处声明时_（基于同一个基类才可以），我们才认为这两个类型是兼容的。 对于 protected 成员也使用这个规则。

```
class Animal {
  private name: string;
  constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal {
  constructor() { super("Rhino"); }
}

class Employee {
  private name: string;
  constructor(theName: string) { this.name = theName; }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
animal = employee; // 错误: Animal 与 Employee 不兼容.
```

尽管 Employee 里也有一个私有成员 name，但它明显不是 Animal 里面定义的那个。

**理解 `protect`**
`protected` 修饰符与 `private` 修饰符的行为很相似，但有一点不同， `protected` 成员在派生类中仍然可以访问。

```
class Person {
  protected name: string;
  constructor(name: string) { this.name = name; }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name)
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // error
// Property 'name' is protected and only accessible within class 'Person' and its subclasses.ts(2445)
```

我们不能在 Person 类外使用 name，但是我们仍然可以通过 Employee 类的实例方法访问，因为 Employee 是由 Person 派生而来的。

```
class Person {
  protected name: string;
  protected constructor(theName: string) { this.name = theName; }
}

// Employee 能够继承 Person
class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
let john = new Person("John"); // 错误: 'Person' 的构造函数是被保护的.
// Constructor of class 'Person' is protected and only accessible within the class declaration.ts(2674)
```

**readonly 修饰符**
只读属性必须在声明时，或者构造函数里被初始化

```
class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(theName: string) {
    this.name = theName;
  }
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
// Cannot assign to 'name' because it is a read-only property.ts(2540)

```

**参数属性**

参数属性通过给构造函数参数前面添加一个访问限定符来声明。 使用 `private` 限定一个参数属性会声明并初始化一个私有成员；对于 `public` 和 `protected` 来说也是一样。把声明和赋值合并至一处。

```
class Octopus {
  readonly numberOfLegs: number = 8;
  constructor(readonly name: string) { }
}
```

**存取器**

TS 支持通过 `getter/setter` 来截取对对象成员的访问。它能帮助你有效的控制对对象成员的访问。
存取器要求你将编译器设置为输出 ECMAScript 5 或更高。 不支持降级到 ECMAScript 3。

```
let passcode = "secret passcode";

class Employee2 {
  private _fullName: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (passcode && passcode == "secret passcode") {
      this._fullName = newName;
    }
    else {
      console.log("Error: Unauthorized update of employee!");
    }
  }
}

let employee = new Employee2();
employee.fullName = "Bob Smith";
if (employee.fullName) {
  console.log(employee.fullName);
}
```

#### 静态属性

我们也可以创建类的静态成员，这些属性存在于类本身上面而不是类的实例上。每个实例想要访问静态属性的时候，都要在属性前面加上类名。如同在实例属性上使用 this.前缀来访问属性一样。

```
class Grid {
  static origin = { x: 0, y: 0 };
  calculateDistanceFromOrigin(point: { x: number; y: number; }) {
    let xDist = (point.x - Grid.origin.x);
    let yDist = (point.y - Grid.origin.y);
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor(public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
```

#### 抽象类

抽象类做为其它派生类的基类使用。它们一般不会直接被实例化。`abstract`关键字是用于定义抽象类和在抽象类内部定义抽象方法。抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。抽象方法的语法与接口方法相似。两者都是定义方法签名但不包含方法体。然而，抽象方法必须包含 `abstract`关键字并且可以包含访问修饰符。

```
abstract class Department {

  constructor(public name: string) {
  }

  printName(): void {
    console.log('Department name: ' + this.name);
  }

  abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {

  constructor() {
    super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
  }

  printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am.');
  }

  generateReports(): void {
    console.log('Generating accounting reports...');
  }
}

let department: Department; // 允许创建一个对抽象类型的引用
department = new Department(); // 错误: 不能创建一个抽象类的实例。Cannot create an instance of an abstract class.ts(2511)
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
department.generateReports(); // 错误: 方法在声明的抽象类中不存在。Property 'generateReports' does not exist on type 'Department'.ts(2339)

```

#### 把类当接口使用

```
let point: Point3D = {
  x: 21,
  y: 88,
  z: 32
}

let point2 = <Point3D>{}
// TypeScript会假设你，程序员，已经进行了必须的检查。

```
