/**
 * 删除json中的某一个键值对，直接使用JavaScript中的 delete 方法
 */

 let obj = {
   "name": "guozheng",
   "sex": "man",
   "age": 28,
   "address": "浦东新区和沙航城",
   "phone": "18880020123"
 };

 delete obj.phone;

 console.log(obj)