// 인터페이스와 클래스는 동일
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
}

let developer: Developer;
let person: Person;

// developer = person;
// person = developer;

// 함수
let add = function add(a: number) {
  console.log(a);
};

let sum = function sum(a: number, b: number) {
  return a + b;
};
// add = sum;
// sum = add;

// 제네릭
interface Empty<T> {
  // ...
}
var empty1 = Empty<string>;
var empty2: Empty<number>;

interface NotEmpty<T> {
  data: T
}
var notempty1: NotEmpty<string>
var notempty2: NotEmpty<number>

