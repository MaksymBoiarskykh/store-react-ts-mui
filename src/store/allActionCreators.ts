import { productsActionCreators } from "./reducers/products/productsActionCreators";
import {
  selectProduct,
  removeProduct,
} from "./reducers/basketProducts/basketProductsSlice";

// собираем все action creators для передачи его в кастомный хук useAction
export const allActionCreators = {
  ...productsActionCreators,
  selectProduct,
  removeProduct,
};
