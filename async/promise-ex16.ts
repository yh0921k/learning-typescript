// function doSync() {
//   throw new Error('Some Error');
// }
//
// function requestData() {
//   doSync();
//   return fetch()
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
// }

// function doSync() {
//   throw new Error('Some Error');
// }
//
// function requestData() {
//   return fetch()
//     .then(data => {
//       doSync();
//       console.log(data);
//     })
//     .catch(error => console.log(error));
// }

// function doSync() {
//   throw new Error('Some Error');
// }
//
// function requestData() {
//   return Promise.resolve()
//     .then(doSync)
//     .then(fetch)
//     .then(data => {
//       console.log(data);
//     })
//     .catch(error => console.log(error));
// }
