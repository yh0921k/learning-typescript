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
//     return requestDataSecond(result1).then(result2 => {
//       console.log({ result2 });
//     });
//   })
//   .then(() => console.log('end'));
requestDataFirst()
    .then(function (result1) {
    return requestDataSecond(result1);
})
    .then(function (result2) {
    console.log({ result2: result2 });
})
    .then(function () { return console.log('end'); });
