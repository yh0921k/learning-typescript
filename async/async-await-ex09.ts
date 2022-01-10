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
  const [data1, data2] = await Promise.all([
    asyncFunction01(),
    asyncFunction02(),
  ]);
  console.log({ data1, data2 });
}
getData();
