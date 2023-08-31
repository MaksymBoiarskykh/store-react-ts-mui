import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../models/IProduct";

interface todoState {
  products: IProduct[];
  isLoading: boolean;
  error: string;
}

const initialState: todoState = {
  products: [],
  isLoading: false,
  error: "",
};

export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productsFetching(state) {
      state.isLoading = true;
    },
    productsFetchingSuccess(state, action: PayloadAction<IProduct[]>) {
      state.isLoading = false;
      state.error = "";
      state.products = action.payload;
    },
    productsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const productsReducer = productsSlice.reducer;
