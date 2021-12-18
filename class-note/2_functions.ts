// 함수의 파라미터 및 반환 값에 타입을 정의
function sum(a: number, b: number): number {
  return a + b;
}

// 함수의 옵셔널 파라미터
function log(a: string, b?: string, c?: string) {
  return;
}

log('a');
log('a', 'b', 'c');
