function requestDataFirst(): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}

let cachedPromise: Promise<any>;
function getData() {
  cachedPromise = cachedPromise || requestDataFirst();
  return cachedPromise;
}

getData().then(v => console.log(v));
getData().then(v => console.log(v));
