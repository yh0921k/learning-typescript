type callBackType = (data: dataType) => void;
type dataType = { name: string; age: number };

function requestDataFirst(callback: callBackType) {
  callback({ name: 'abc', age: 23 });
}

function requestDataSecond(callback: callBackType) {
  callback({ name: 'abc', age: 23 });
}

function onSuccessFirst(data: dataType) {
  console.log(data);
  requestDataSecond(onSuccessSecond);
}

function onSuccessSecond(data: dataType) {
  console.log(data);
}

requestDataFirst(onSuccessFirst);
