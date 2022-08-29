import { configureStore } from "@reduxjs/toolkit";
import { listSlice } from "./listSlice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      [listSlice.name]: listSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
