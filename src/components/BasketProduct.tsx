import {
  Avatar,
  Box,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { IProduct } from "../models/IProduct";
import { FC } from "react";
import { useActions } from "../hooks/useAction";

interface IBasketProduct {
  product: IProduct;
}

export const BasketProduct: FC<IBasketProduct> = ({ product }) => {
  const { removeProduct } = useActions();
  return (
    <ListItem
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <ListItemAvatar>
          <Avatar
            variant="square"
            alt={product.title}
            src={product.image}
            sx={{ width: 70, height: 70 }}
          />
        </ListItemAvatar>
        <ListItemText primary={product.title} sx={{ ml: 5 }} />
      </Box>
      <IconButton onClick={() => removeProduct(product)}>
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
};

export default BasketProduct;
