import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listState: [],
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setListState(state, action) {
      state.listState = action.payload;
    },
    resetListState(state, action) {
      state.listState = []
    }
  },
});

export const { setListState, resetListState } = listSlice.actions;
export const listState = (state) => state.list.listState;

export default listSlice.reducer;