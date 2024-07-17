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
  },
});

export const { updateText, addText } = textSlice.actions;

const textReducer = textSlice.reducer;

export default textReducer;
