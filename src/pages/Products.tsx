import { FC, useEffect, useState } from "react";
import { ListProducts } from "../components/ListProducts";
import { useActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Sidebar } from "../components/Sidebar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import { CircularProgress } from "@mui/material";
import { useFiltering } from "../utils/useFiltering";
import { IProduct } from "../models/IProduct";

const drawerWidth = 240;

export const Products: FC = () => {
  const { fetchProducts } = useActions();
  const { products, isLoading } = useTypedSelector(
    (state) => state.productsReducer
  );
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState<number | null>(null);

  const filteredProducts: IProduct[] = useFiltering(rating, products);

  const addCategory = (value: string) => {
    if (value === "all") {
      setCategory("");
    } else {
      setCategory(`/category/${value}`);
    }
  };

  useEffect(() => {
    fetchProducts(category);
  }, [category]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        open={true}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Sidebar
          addCategory={addCategory}
          setRating={setRating}
          rating={rating}
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
