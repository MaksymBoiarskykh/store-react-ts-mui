import { FC, useState } from "react";
import ListProducts from "../components/ListProducts";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Sidebar } from "../components/Sidebar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import { CircularProgress } from "@mui/material";
import { useFiltering } from "../hooks/useFiltering";
import { IProduct } from "../models/IProduct";
import { useScreenSize } from "../hooks/useScreenSize";
import { productsApi } from "../store/reducers/api/productsApi";

export const Products: FC = () => {
  const {
    data: products,
    isLoading,
    error,
  } = productsApi.useFetchProductsQuery("");
  const { open } = useTypedSelector((state) => state.sidebarReducer);
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState<number | null>(null);
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000]);
  const isBigSize = useScreenSize();

  const addCategory = (value: string) => {
    if (value === "all") {
      setCategory("");
    } else {
      setCategory(value);
    }
  };

  const handleChange = (newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  const filteredProducts: IProduct[] = useFiltering(
    rating,
    category,
    priceRange,
    products as IProduct[]
  );

  if (error) {
    return <h1>error</h1>;
  }
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="persistent"
        open={isBigSize || open}
        sx={{
          width: isBigSize ? 230 : "none",
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: isBigSize ? 230 : "none",
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
