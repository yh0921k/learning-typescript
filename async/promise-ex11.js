function requestDataFirst() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(10);
        }, 1000);
    });
}
Promise.race([
    requestDataFirst(),
    new Promise(function (_, reject) {
        setTimeout(reject, 3000);
    }),
])
    .then(function (data) { return console.log(data); })["catch"](function (error) { return console.log('Rejected'); });
