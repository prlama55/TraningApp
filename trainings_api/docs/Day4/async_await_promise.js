const asyncExample = async () => {
  return a;
};

asyncExample()
  .then((result) => {
    console.log("result=then===", result);
  })
  .catch((err) => {
    console.log("Error---");
  });

const awaitResolved = async () => {
  try {
    const result = await asyncExample();
    console.log("result===", result);
  } catch (e) {
    console.log("eeee");
  }
};
awaitResolved();
