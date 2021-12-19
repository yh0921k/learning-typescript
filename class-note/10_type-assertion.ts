// 타입 단언
let a;
a = 20;
a = 'a';
let b = a as string;

// DOM API 조작
// <div id="app">hi</div>

// 아래의 단언(as)로 인해 null과 union 하지 않음
// 즉, 단언은 개발자가 TS보다 타입에 대해 더 잘 알고 있는 경우 책임을 위임
let div = document.querySelector('div') as HTMLDivElement;
let app = document.querySelector('#app');
if (div) {
  div.innerText = 'aaa';
}
