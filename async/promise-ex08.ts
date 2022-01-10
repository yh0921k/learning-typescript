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
  });
