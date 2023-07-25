import {configureStore} from "@reduxjs/toolkit";
import {reducer as routesReducer} from "./routesSlice";

export const store = configureStore(({
  reducer: {
    routes: routesReducer
  },
  devTools: true
}))
