//state = initialstate,reducer
import {createStore} from "redux";

const initialstate =0;

const reducer = (state = initialstate, { type, step }) => {
  switch (type) {
    case "+":
      return state=  + step;
    case "-":
      return state=  - step;
    default:
      return state;
  }
}

export default createStore(
  reducer
);