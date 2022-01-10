Promise.reject('error')
  .then(() => console.log('then 01'))
  .then(() => console.log('then 02'))
  .then(
    () => console.log('then 03'),
    () => console.log('then 04'),
  )
  .then(
    () => console.log('then 05'),
    () => console.log('then 06'),
  );
