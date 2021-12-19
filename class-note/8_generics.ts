// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(10);
// logText('Hi');
// logText(true);

// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }
// logText<number>(10);
// logText('Hi');
// logText(true);

// function logText(text: string) {
//   console.log(text);
//   // text.split('').reverse().join('');
//   return text;
// }
//
// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }
// logText('a');
// const num = logNumber(10);

function logText(text: string | number) {
  console.log(text);
  // text.split('').reverse().join('');

  return text;
}
const a = logText('a');
logText(10);
