function requestDataFirst() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(10);
        }, 1000);
    });
}
var cachedPromise;
function getData() {
    cachedPromise = cachedPromise || requestDataFirst();
    return cachedPromise;
}
getData().then(function (v) { return console.log(v); });
getData().then(function (v) { return console.log(v); });
