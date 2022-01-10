function requestDataFirst(callback) {
    callback({ name: 'abc', age: 23 });
}
function requestDataSecond(callback) {
    callback({ name: 'abc', age: 23 });
}
function onSuccessFirst(data) {
    console.log(data);
    requestDataSecond(onSuccessSecond);
}
function onSuccessSecond(data) {
    console.log(data);
}
requestDataFirst(onSuccessFirst);
