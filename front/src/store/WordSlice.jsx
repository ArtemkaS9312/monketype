import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  typedText: "",
};

const wordSlice = createSlice({
  name: "word",
  initialState,
  reducers: {
    setTypedText: (state, action) => {
      state.typedText = action.payload;
    },
  },
});

export const { setTypedText } = wordSlice.actions;
export default wordSlice.reducer;
