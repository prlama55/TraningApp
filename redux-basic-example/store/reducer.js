const initialState = {
  count: 0,
  type: "",
  name: "",
};
const counter = (prevState = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...prevState, count: action.payload, type: action.type };
    case "DECREMENT":
      return { ...prevState, count: action.payload, type: action.type };
    case "SET_NAME":
      return { ...prevState, name: action.payload, type: action.type };
    case "CLEAR_COUNTER":
      return initialState;
    default:
      return initialState;
  }
};
module.exports = {
  counter,
};
