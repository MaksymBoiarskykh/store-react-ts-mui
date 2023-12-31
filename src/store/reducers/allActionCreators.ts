// import { productsActionCreators } from "./products/productsActionCreators";
import { changeSidebarStatus } from "./sidebar/sidebarSlice";
import {
  selectProduct,
  removeProduct,
} from "./basketProducts/basketProductsSlice";

// собираем все action creators для передачи его в кастомный хук useAction
export const allActionCreators = {
  // ...productsActionCreators,
  selectProduct,
  removeProduct,
  changeSidebarStatus,
};
