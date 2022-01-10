function asyncFunction01() {
  return Promise.resolve(10);
}

function asyncFunction02() {
  return Promise.resolve(30);
}

async function getData() {
  const data1 = await asyncFunction01();
  console.log(data1);
  const data2 = await asyncFunction02();
  console.log(data2);
}
getData();
