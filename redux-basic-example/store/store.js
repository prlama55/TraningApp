const { createStore } = require("redux");
const { counter } = require("./reducer");

const store = createStore(counter);

module.exports = {
  store,
};
