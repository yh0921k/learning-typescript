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

// function logText(text: string | number) {
//   console.log(text);
//   // text.split('').reverse().join('');
//
//   return text;
// }
// const a = logText('a');
// logText(10);

// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }
// const str = logText<string>('abc');
// console.log(str.split(''));
//
// const flag = logText<boolean>(true);

// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }
// const obj: Dropdown = { value: 'abc', selected: false };

// interface Dropdown<T> {
//   value: T;
//   selected: boolean;
// }
// const obj: Dropdown<number> = {
//   value: 100,
//   selected: true,
// };

// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length);
//   text.forEach(function (text) {
//     console.log(text);
//   });
//   return text;
// }
// logTextLength(['hello', 'hi']);

// 정의된 타입 이용하기
// interface LengthType {
//   length: number;
// }
// function logTextLength<T extends LengthType>(text: T): T {
//   text.length;
//   return text;
// }
// logTextLength('aaa');
// logTextLength({ length: 10 });

// keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}
// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption('name');
