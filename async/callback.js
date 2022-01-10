function requestData(callback) {
    setTimeout(function () {
        callback({ name: 'abc', age: 23 });
    }, 1000);
}
function onSuccess(data) {
    console.log(data);
}
console.log('Call requestData()');
requestData(onSuccess);
