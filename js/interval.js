let num = 0;
let s1 = setInterval(() => {
  num++
  console.log(num)
}, 1000);

setTimeout(() => {
  clearInterval(s1)
}, 5000)

let num = 0;
testInterval = () => {
  return setInterval(() => {
    num++
    console.log(num)
  }, 1000);
}

/* --当一个函数返回的是一个定时器时，下面这种写法时错误的，因为每次执行函数都会创建一个新的计数器，所以无法清除-- */
setTimeout(() => {
  clearInterval( testInterval() );
}, 5000);
/* ----应该改为如下---- */
let s2 = testInterval();
setTimeout(() => {
  clearInterval(s2)
}, 5000);




 
 
 