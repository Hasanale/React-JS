import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: "",
  colorone: "",
};

export const colorSlice = createSlice({
  name: "colorchanger",
  initialState,
  reducers: {
    changeColor: (state, action) => {
      state.color = action.payload;
    },
    changeBg: (state, action) => {
      state.colorone = action.payload;
    },
  },
});

export const { changeColor, changeBg } = colorSlice.actions;

export default colorSlice.reducer;
