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
//     return requestDataSecond(result1);
//   })
//   .then((result1, result2) => console.log({ result1, result2 }));

// requestDataFirst()
//   .then(result1 => {
//     return requestDataSecond(result1).then(result2 => {
//       console.log({ result2 });
//       return [result1, result2];
//     });
//   })
//   .then(([result1, result2]) => console.log({ result1, result2 }));

requestDataFirst()
  .then(result1 => {
    return Promise.all([result1, requestDataSecond(result1)]);
  })
  .then(([result1, result2]) => {
    console.log({ result1, result2 });
  });
