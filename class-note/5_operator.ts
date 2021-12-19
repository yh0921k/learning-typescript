// function logMessage(value: any) {
//   console.log(value);
// }
//
// logMessage('hello');
// logMessage(199);
// logMessage(false);

function logMessage(value: string | number) {
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  if (typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(199);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// function askSomeone(someone: Developer | Person) {
//   console.log(someone.name);
//   // console.log(someone.age); // Error
// }

function askSomeone(someone: Developer & Person) {
  console.log(someone.name);
  console.log(someone.age); // OK
}
