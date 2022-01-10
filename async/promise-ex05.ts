Promise.reject(10)
  .then(data => {
    console.log('then 01', data);
    return 20;
  })
  .catch(data => {
    console.log('catch', data);
    return 30;
  })
  .then(data => {
    console.log('then 02', data);
  });
