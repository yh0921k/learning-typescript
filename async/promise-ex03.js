Promise.reject(1).then(null, function (error) {
    console.log(error);
});
Promise.reject(1)["catch"](function (error) {
    console.log(error);
});
