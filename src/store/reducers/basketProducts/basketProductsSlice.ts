import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../models/IProduct";

interface todoState {
  products: IProduct[];
}

const initialState: todoState = {
  products: [],
};

export const basketProductsSlice = createSlice({
  name: "basketProductsSlice",
  initialState,
  reducers: {
    selectProduct(state, action: PayloadAction<IProduct>) {
      state.products.push(action.payload);
    },
    removeProduct(state, action: PayloadAction<IProduct>) {
      state.products = state.products.filter(
        (el) => el.id !== action.payload.id
      );
    },
  },
});

export const { selectProduct, removeProduct } = basketProductsSlice.actions;
export const basketProductsReducer = basketProductsSlice.reducer;
