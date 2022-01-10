Promise.reject(10)
    .then(function (data) {
    console.log('then 01', data);
    return 20;
})["catch"](function (data) {
    console.log('catch', data);
    return 30;
})
    .then(function (data) {
    console.log('then 02', data);
});
