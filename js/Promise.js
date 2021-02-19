/**
 * 原理：
 *      所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。
 *      从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。
 * 
 * 定位：Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。
 * 
 * 使用：
 *      Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。
 *      它们是两个函数，由 JavaScript 引擎提供，不用自己部署。
 *      resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
 *      reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。
 * 
 *      Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。
 *      then方法可以接受两个回调函数作为参数。第一个回调函数是Promise对象的状态变为resolved时调用，第二个回调函数是Promise对象的状态变为rejected时调用。
 *      这两个函数都是可选的，不一定要提供。它们都接受Promise对象传出的值作为参数。
 * 
 * 特点：
 *      1、对象的状态不受外界影响。
 *        Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
 * 
 *      2、一旦状态改变，就不会再变，任何时候都可以得到这个结果。
 *        Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。
 *      
 *      3、Promise 新建后立即执行，所以首先输出的是Promise。然后，then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以resolved最后输出。
 * 
 *      4、注意，调用resolve或reject并不会终结 Promise 的参数函数的执行。
 * 
 *      5、一般来说，调用resolve或reject以后，Promise 的使命就完成了，后继操作应该放到then方法里面，而不应该直接写在resolve或reject的后面。
 *        所以，最好在它们前面加上return语句，这样就不会有意外。
 * 
 *      6、Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获。
 * 
 *      7、如果没有使用catch()方法指定错误处理的回调函数，Promise 对象抛出的错误不会传递到外层代码，即不会有任何反应。
 * 
 *      8、Promise 内部的错误不会影响到 Promise 外部的代码，通俗的说法就是“Promise 会吃掉错误”。
 * 
 *      9、一般总是建议，Promise 对象后面要跟catch()方法，这样可以处理 Promise 内部发生的错误。
 *        catch()方法返回的还是一个 Promise 对象，因此后面还可以接着调用then()方法。
 * 
 *      10、Promise.all()方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
 *        只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
 *        只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。
 * 
 *      11、Promise.race()方法.
 *        只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。
 *        那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。
 * 
 *      12、Promise.allSettled()方法
 *        有时候，我们不关心异步操作的结果，只关心这些操作有没有结束。这时，Promise.allSettled()方法就很有用。
 *        如果没有这个方法，想要确保所有操作都结束，就很麻烦。Promise.all()方法无法做到这一点。
 * 
 * 优点：
 *      有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。
 *      此外，Promise对象提供统一的接口，使得控制异步操作更加容易。
 * 
 * 缺点：
 *      首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。
 *      其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
 *      第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。
 * 
 * 文档详情：https://es6.ruanyifeng.com/#docs/promise#Promise-%E7%9A%84%E5%90%AB%E4%B9%89
 * 
 * 手写Promise
 */
