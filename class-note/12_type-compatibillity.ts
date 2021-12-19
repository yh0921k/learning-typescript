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
