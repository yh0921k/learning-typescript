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

Promise.all([requestDataFirst(), requestDataSecond()]).then(
  ([data1, data2]) => {
    console.log(data1, data2);
  },
);
