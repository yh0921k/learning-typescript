function requestDataFirst() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(10);
        }, 1000);
    });
}
function requestDataSecond() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(20);
        }, 1000);
    });
}
Promise.all([requestDataFirst(), requestDataSecond()]).then(function (_a) {
    var data1 = _a[0], data2 = _a[1];
    console.log(data1, data2);
});
