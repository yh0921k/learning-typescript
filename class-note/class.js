// ES2015(ES6)에서 도입
class Person {
  constructor(name, age) {
    console.log('created');
    this.name = name;
    this.age = age;
  }
}

// let capt = new Person('capt', 100);
// console.log(capt);

// Prototype

// var user = { name: 'capt', age: 100 };
// var admin = { name: 'capt', age: 100, role: 'admin' };

// var user = { name: 'capt', age: 100 };
// var admin = {};
// admin.__proto__ = user;
// console.log(admin.__proto__);
// console.log(admin.__proto__.__proto__);
// console.log(admin.name);
// console.log(admin.age);
//
// admin.role = 'admin';
// console.log(admin.name);
// console.log(admin.age);
// console.log(admin.role);

// Built-in API, Native Javascript API
var obj = { a: 10 };
console.log(obj); // 브라우저 개발자 도구 참조 및 MDN Object 참조
