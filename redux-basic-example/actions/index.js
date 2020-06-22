const { store } = require("../store/store");
store.subscribe(() => console.log("state value===", store.getState()));

store.dispatch({
  type: "INCREMENT",
  payload: 10,
});

store.dispatch({
  type: "INCREMENT",
  payload: 5,
});
store.dispatch({
  type: "SET_NAME",
  payload: "padma",
});

store.dispatch({
  type: "INCREMENT",
  payload: 5,
});
store.dispatch({
  type: "DECREMENT",
  payload: 10,
});
store.dispatch({
  type: "CLEAR_COUNTER",
});
