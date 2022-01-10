function asyncFunction01() {
  return Promise.resolve(20);
}

function asyncFunction02(data1: number) {
  return Promise.resolve(30 + data1);
}

function asyncFunction03(data1: number, data2: number) {
  return Promise.resolve(data1 + data2);
}

function getDataPromise() {
  asyncFunction01()
    .then(data1 => Promise.all([data1, asyncFunction02(data1)]))
    .then(([data1, data2]) => {
      return asyncFunction03(data1, data2);
    });
}

async function getDataAsync() {
  const data1 = await asyncFunction01();
  const data2 = await asyncFunction02(data1);
  return asyncFunction03(data1, data2);
}
