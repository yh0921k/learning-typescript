function requestDataFirst(): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}

Promise.race([
  requestDataFirst(),
  new Promise((_, reject) => {
    setTimeout(reject, 3000);
  }),
])
  .then(data => console.log(data))
  .catch(error => console.log('Rejected'));
