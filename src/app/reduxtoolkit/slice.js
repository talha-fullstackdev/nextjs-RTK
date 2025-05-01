"use client"
import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  employees: [],
};
const Slice = createSlice({
  name:"addSlice",
  initialState,
  reducers: {
    add: (state, action) => {
        console.log(action)
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.employees.push(data);
    },
  },
});
export const { add } = Slice.actions;
export default Slice.reducer;
