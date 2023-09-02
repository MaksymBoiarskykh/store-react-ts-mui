import { Route, Routes } from "react-router-dom";
import { Products } from "../pages/Products";
import Basket from "../pages/Basket";
import { FC } from "react";
import { ProductInfo } from "../pages/ProductInfo";

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductInfo />} />
      <Route path="/basket" element={<Basket />} />
    </Routes>
  );
};
