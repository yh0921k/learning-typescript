// 변수에 인터페이스 활용
var seho = {
    age: 10,
    name: 'seho'
};
// 함수에 인터페이스 활용
function getUser(user) {
    console.log(user);
}
var capt = {
    name: 'capt',
    age: 100
};
getUser(capt);
var sum;
sum = function (a, b) {
    return a + b;
};
var arr = ['a', 'b', 'c'];
arr[0] = 'c';
var obj = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/
};
Object.keys(obj).forEach(function (value) {
    console.log(value);
});
