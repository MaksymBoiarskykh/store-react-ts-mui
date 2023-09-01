import { Box, Grid, Rating } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IProduct } from "../models/IProduct";
import { FC } from "react";
import { useActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface ICardProduct {
  product: IProduct;
}

export const CardProduct: FC<ICardProduct> = ({ product }) => {
  const { products } = useTypedSelector((state) => state.basketProductsReducer);
  const { selectProduct } = useActions();

  const pushToBasket = () => {
    if (!products.some((el) => el.id === product.id)) {
      selectProduct(product);
    }
  };

  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          pb: 2,
        }}
      >
        <Box
          sx={{
            height: "200px",
            width: "100%",
            mt: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            alt={product.title}
            sx={{
              maxWidth: "80%",
              width: "auto",
            }}
            image={product.image}
          />
        </Box>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h6" component="div">
            {product.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" color="text.secondary">
              {product.price}₴
            </Typography>
            <Rating value={product.rating.rate} readOnly />
          </Box>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            color="info"
            onClick={pushToBasket}
          >
            Add to basket
          </Button>
          <Button size="small" variant="outlined" color="info">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
