import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./reducers/products/productsSlice";
import { basketProductsReducer } from "./reducers/basketProducts/basketProductsSlice";

const rootReducer = combineReducers({ productsReducer, basketProductsReducer });
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
// типы для кастомных useDispatch, useSelector
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
