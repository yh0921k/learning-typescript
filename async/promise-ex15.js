function requestDataFirst() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(10);
        }, 1000);
    });
}
function requestDataSecond(data) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(data + 20);
        }, 1000);
    });
}
// requestDataFirst()
//   .then(result1 => {
//     return requestDataSecond(result1);
//   })
//   .then((result1, result2) => console.log({ result1, result2 }));
// requestDataFirst()
//   .then(result1 => {
//     return requestDataSecond(result1).then(result2 => {
//       console.log({ result2 });
//       return [result1, result2];
//     });
//   })
//   .then(([result1, result2]) => console.log({ result1, result2 }));
requestDataFirst()
    .then(function (result1) {
    return Promise.all([result1, requestDataSecond(result1)]);
})
    .then(function (_a) {
    var result1 = _a[0], result2 = _a[1];
    console.log({ result1: result1, result2: result2 });
});
