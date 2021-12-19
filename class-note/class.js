// ES2015(ES6)에서 도입
class Person {
  constructor(name, age) {
    console.log('created');
    this.name = name;
    this.age = age;
  }
}

let capt = new Person('capt', 100);
console.log(capt);
