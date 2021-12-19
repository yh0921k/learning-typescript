interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: 'tony', age: 33, skill: 'abc' };
}

let tony = introduce();
console.log(tony.name);
// console.log(tony.skill);

if ((tony as Developer).skill) {
  console.log((tony as Developer).skill);
} else if ((tony as Person).age) {
  console.log((tony as Person).age);
}
