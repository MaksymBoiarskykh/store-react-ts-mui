import { IProduct } from "../../../models/IProduct";
import { AppDispatch } from "../../store";
import { productsSlice } from "./productsSlice";
import axios from "axios";

const link = "https://fakestoreapi.com/products";

export const productsActionCreators = {
  fetchProducts: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(productsSlice.actions.productsFetching());
      const response = await axios.get<IProduct[]>(link, {
        params: {},
      });
      dispatch(productsSlice.actions.productsFetchingSuccess(response.data));
    } catch (e) {
      let errorMessage = "Failed to do something exceptional";
      if (e instanceof Error) {
        errorMessage = e.message;
      }

      dispatch(productsSlice.actions.productsFetchingError(errorMessage));
    }
  },
};
