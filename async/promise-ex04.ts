Promise.resolve()
  .then(() => {
    throw new Error('Some Error');
  })
  .catch(error => {
    console.log(error);
  });
