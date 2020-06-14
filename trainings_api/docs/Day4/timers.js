const setTimeoutExample1 = () => {
  setTimeout(() => {
    console.log("Executes in 1 sec");
  }, 1000);
};

const setTimeoutExample2 = () => {
  setTimeout(() => {
    console.log("Executes in 1.5 sec");
  }, 1500);
};

const setTimeoutExample3 = () => {
  setTimeout(() => {
    console.log("Executes in 2 sec");
  }, 2000);
};
// event queue[setTimeoutExample3,setTimeoutExample2]
setTimeoutExample3(); // w1
setTimeoutExample1(); // w1
setTimeoutExample2(); // w1

const setIntervalExample3 = () => {
  setInterval(() => {
    console.log("Executes in 2 sec");
  }, 100000);
};
setIntervalExample3();
const setsetImmediateExample3 = () => {
  setImmediate((args) => {
    console.log("====", args);
  }, "Set immediate");
};
setsetImmediateExample3();
