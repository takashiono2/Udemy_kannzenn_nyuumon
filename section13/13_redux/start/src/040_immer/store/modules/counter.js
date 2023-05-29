import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    add(state, { type, payload }) {
      state.count = state.count + payload;
      // const newstate = { ...state }
      // newstate.count = state.count + payload;
      // return newstate;
    },
    minus(state, { type, payload }) {
      state.count = state.count - payload;
      // const newstate = { ...state }
      // newstate.count = state.count - payload;
      // return newstate;
    }
  }
})

const { add, minus } = counter.actions;

export { add, minus }
export default counter.reducer