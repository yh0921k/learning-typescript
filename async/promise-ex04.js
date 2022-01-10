Promise.resolve()
    .then(function () {
    throw new Error('Some Error');
})["catch"](function (error) {
    console.log(error);
});
