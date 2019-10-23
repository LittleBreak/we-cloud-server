async function timeout(ms) {
  return await new Promise(resolve => {
    setTimeout(() => {
      resolve(300);
    }, ms);
  });
}

async function asyncPrint(value, ms) {
  const data = await 3
  console.log(data);
}

asyncPrint("hello world", 50);
