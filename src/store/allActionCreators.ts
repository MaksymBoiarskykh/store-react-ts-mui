import { productsActionCreators } from "./reducers/products/productsActionCreators";

// собираем все action creators для передачи его в кастомный хук useAction
export const allActionCreators = {
  ...productsActionCreators,
};
