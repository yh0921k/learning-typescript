// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(10);
// logText('Hi');
// logText(true);

function logText<T>(text: T): T {
  console.log(text);
  return text;
}
logText<number>(10);
logText('Hi');
logText(true);
