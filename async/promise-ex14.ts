function requestDataFirst(): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}

function requestDataSecond(data: number): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data + 20);
    }, 1000);
  });
}

// requestDataFirst()
//   .then(result1 => {
//     return requestDataSecond(result1).then(result2 => {
//       console.log({ result2 });
//     });
//   })
//   .then(() => console.log('end'));

requestDataFirst()
  .then(result1 => {
    return requestDataSecond(result1);
  })
  .then(result2 => {
    console.log({ result2 });
  })
  .then(() => console.log('end'));
