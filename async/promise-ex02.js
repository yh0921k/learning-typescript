Promise.reject('error')
    .then(function () { return console.log('then 01'); })
    .then(function () { return console.log('then 02'); })
    .then(function () { return console.log('then 03'); }, function () { return console.log('then 04'); })
    .then(function () { return console.log('then 05'); }, function () { return console.log('then 06'); });
