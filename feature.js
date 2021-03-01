 // 对象结构就是根据对象的属性,一一把属性值赋值给对应的变量名
 let obj = {
     username: "张三",
     userage: 23,
     usersex: "男",
 };

 // 按属性名的一一对应关系来进行赋值
 // let { username, userage } = obj;
 // console.log( username, userage );

 // 本质-按属性名的一一对应关系来进行赋值
 // let { username:myName, userage:myAge } = obj;
 // myName和myAge才是变量名
 // console.log( myName , myAge );

 // 默认值
 /* let { username, userage, userid ,usersex } = obj;
 console.log( username );// 张三
 console.log( userage );// 23
 console.log( userid );// undefined
 console.log( usersex );// 男 */

 let { username, userage, userid = 1, usersex } = obj;
 console.log(username); // 张三
 console.log(userage); // 23
 console.log(userid); // 1
 console.log(usersex); // 男