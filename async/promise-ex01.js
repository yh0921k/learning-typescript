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
requestDataFirst()
    .then(function (data) {
    console.log(data);
    return requestDataSecond();
})
    .then(function (data) {
    console.log(data);
    return data + 1;
})
    .then(function (data) {
    console.log(data);
    throw new Error('Error');
})
    .then(null, function (error) {
    console.log('Some Error');
})
    .then(function (data) {
    console.log(data);
});
