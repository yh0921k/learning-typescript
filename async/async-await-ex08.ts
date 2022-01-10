function asyncFunction01() {
  return new Promise(resolve => {
    console.log('처리중 01');
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}

function asyncFunction02() {
  return new Promise(resolve => {
    console.log('처리중 02');
    setTimeout(() => {
      resolve(20);
    }, 1000);
  });
}

async function getData() {
  const p1 = asyncFunction01();
  const p2 = asyncFunction02();
  const data1 = await p1;
  const data2 = await p2;
  console.log({ data1, data2 });
}
getData();
