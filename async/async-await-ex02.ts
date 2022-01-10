async function getData() {
  return Promise.resolve(123);
  //return Promise.reject(123);
}

getData()
  .then(data => console.log('fulfilled', data))
  .catch(data => console.log('rejected', data));
