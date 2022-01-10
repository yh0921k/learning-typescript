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
requestDataFirst().then(function (data) { return console.log(data); });
requestDataSecond().then(function (data) { return console.log(data); });
