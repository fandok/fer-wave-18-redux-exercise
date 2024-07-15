import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  text: "",
  textList: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  //   sama seperti initialState: initialState
  reducers: {
    updateText: (state, action) => {
      state.text = action.payload;
    },
    addText: (state, action) => {
      state.textList = [...state.textList, action.payload];
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, updateText, addText } =
  counterSlice.actions;

export default counterSlice.reducer;
