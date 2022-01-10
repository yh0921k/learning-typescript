function asyncFunction01() {
  return Promise.resolve(20);
}

function asyncFunction02() {
  return Promise.resolve(30);
}

function getDataPromise() {
  asyncFunction01()
    .then(data => {
      console.log(data);
      return asyncFunction02();
    })
    .then(data => {
      console.log(data);
    });
}

async function getDataAsync() {
  const data1 = await asyncFunction01();
  console.log(data1);
  const data2 = await asyncFunction02();
  console.log(data2);
}

getDataPromise();
getDataAsync();
