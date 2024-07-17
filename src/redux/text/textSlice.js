import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
  textList: [],
};

export const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    updateText: (state, action) => {
      state.text = action.payload;
    },
    addText: (state, action) => {
      state.textList = [...state.textList, action.payload];
    },
    editText: (state, action) => {
      state.textList[action.payload.index] = action.payload.value;
    },
  },
});

export const { updateText, addText, editText } = textSlice.actions;

const textReducer = textSlice.reducer;

export default textReducer;
