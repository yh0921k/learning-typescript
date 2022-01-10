function requestDataFirst(): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}

function requestDataSecond(): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(20);
    }, 1000);
  });
}

requestDataFirst()
  .then(data => {
    console.log(data);
    return requestDataSecond();
  })
  .then(data => {
    console.log(data);
    return data + 1;
  })
  .then(data => {
    console.log(data);
    throw new Error('Error');
  })
  .then(null, error => {
    console.log('Some Error');
  })
  .then(data => {
    console.log(data);
  });
