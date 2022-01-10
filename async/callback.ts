type callBackType = (data: dataType) => void;
type dataType = { name: string; age: number };

function requestData(callback: callBackType) {
  setTimeout(() => {
    callback({ name: 'abc', age: 23 });
  }, 1000);
}

function onSuccess(data: dataType) {
  console.log(data);
}

console.log('Call requestData()');
requestData(onSuccess);
