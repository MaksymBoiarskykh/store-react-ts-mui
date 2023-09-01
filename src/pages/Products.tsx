import { FC, useEffect, useState } from "react";
import { ListProducts } from "../components/ListProducts";
import { useActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Sidebar } from "../components/Sidebar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import { CircularProgress } from "@mui/material";
import { useFiltering } from "../hooks/useFiltering";
import { IProduct } from "../models/IProduct";

export const Products: FC = () => {
  const { fetchProducts } = useActions();
  const { products, isLoading } = useTypedSelector(
    (state) => state.productsReducer
  );
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState<number | null>(null);
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000]);

  const addCategory = (value: string) => {
    if (value === "all") {
      setCategory("");
    } else {
      setCategory(`/category/${value}`);
    }
  };

  const handleChange = (newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  useEffect(() => {
    fetchProducts(category);
  }, [category]);

  const filteredProducts: IProduct[] = useFiltering(
    rating,
    priceRange,
    products
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        open={true}
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 240,
            boxSizing: "border-box",
          },
        }}
      >
        <Sidebar
          addCategory={addCategory}
          setRating={setRating}
          rating={rating}
          priceRange={priceRange}
          handleChange={handleChange}
        />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, mt: 7 }}>
        {isLoading ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress sx={{ mt: 20 }} />
          </Box>
        ) : (
          <ListProducts products={filteredProducts} />
        )}
      </Box>
    </Box>
  );
};
