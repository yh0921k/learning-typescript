Promise.reject(10)
    .then(function (data) {
    console.log('onThen', data);
    return data + 1;
})["catch"](function (error) {
    console.log('onCatch');
    return 100;
})["finally"](function () {
    console.log('onFinally');
})
    .then(function (data) {
    console.log('onThen', data);
    return data + 1;
});
