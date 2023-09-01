import { Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IProduct } from "../models/IProduct";
import { FC, memo } from "react";

interface ICardProduct {
  product: IProduct;
}

export const CardProduct: FC<ICardProduct> = ({ product }) => {
  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <Card
        sx={{
          height: "100%",
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
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Buy</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
