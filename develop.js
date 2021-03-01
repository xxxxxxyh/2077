// 数组解构
// 1. 按下标一一对应地去赋值
// let arr = [10,20];
// let [a,b] = arr;
// console.log( a , b);

// 等价于
// let arr = [10,20];
// let a = arr[0];
// let b = arr[1];
// console.log( a, b);

// 等价于
// let [a,b] = [10,20];
// console.log( a, b);

// 2. 左右数量不等
// 右边多
// let [a,b] = [10,20,30,40,50];
// console.log( a, b );// 10 20

// 左边多
// let [a,b,c,d,e] = [10,20,30];
// console.log( a, b , c , d, e);// 10 20 30 undefined undefined

// 3. 跳过部分
// let [a,c] = [10,20,30];
// console.log( a,c );// 10 20


// let [a, ,c] = [10,20,30];
// console.log( a,c );// 10 30

// let [a, ,  , b ] = [10,20,30,40];
// console.log( a , b);

// 4. 默认值
// let [a,b,c,d] = [10,20,30];
// console.log( a, b, c, d);

// let [a,b,c,d = 50] = [10,20,30];
// console.log( a, b, c, d);

// let [a,b,c,d = 50] = [10,20,30,40];
// console.log( a, b, c, d);

// let [a, b , c = 60, d] = [10, 20, 30];
// console.log( a, b, c, d);

// 5. 嵌套
// let [ a, b ] = [ 10 , [20,30,40] ];
// console.log( a, b );

let [a, obj] = [30, { uname: "张三", age: 23 }];
console.log(a);
console.log(obj);