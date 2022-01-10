function requestData() {
    var p = Promise.resolve(10);
    p.then(function (data) {
        return data + 20;
    });
    return p;
}
requestData().then(function (v) { return console.log(v); });
