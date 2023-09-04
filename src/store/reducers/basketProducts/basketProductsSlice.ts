import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface todoState {
  idProducts: number[];
}

const initialState: todoState = {
  idProducts: [],
};

export const basketProductsSlice = createSlice({
  name: "basketProductsSlice",
  initialState,
  reducers: {
    selectProduct(state, action: PayloadAction<number>) {
      state.idProducts.push(action.payload);
    },
    removeProduct(state, action: PayloadAction<number>) {
      state.idProducts = state.idProducts.filter((id) => id !== action.payload);
    },
  },
});

export const { selectProduct, removeProduct } = basketProductsSlice.actions;
export const basketProductsReducer = basketProductsSlice.reducer;
