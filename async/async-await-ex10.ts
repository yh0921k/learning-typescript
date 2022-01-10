// async function getData() {
//   try {
//     await doAsync();
//     return doSync();
//   } catch (error) {
//     console.log(error);
//     return Promise.reject(error);
//   }
// }

// class ThenableExample {
//   then(resolve, reject) {
//     setTimeout(() => resolve(123), 1000);
//   }
// }
// async function asyncFunc() {
//   const result = await new ThenableExample();
//   console.log(result);
// }
// asyncFunc();
