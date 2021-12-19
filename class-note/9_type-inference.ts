// 타입 추론 기본
let a = 10;

function getB(b = 10) {
  let c = 'abc';
  return b + c;
}

// 타입 추론 기본 2
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }
//
// let shoppingItem: Dropdown<string> = {
//   value: 'abc',
//   title: 'hello',
// };

// 타입 추론 기본 3
interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

let detailedItem: DetailedDropdown<string> = {
  title: 'abc',
  description: 'ab',
  value: 'val',
  tag: 'tag',
};
