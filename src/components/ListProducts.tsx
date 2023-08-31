import { Container, Grid } from "@mui/material";
import { IProduct } from "../models/IProduct";
import { FC } from "react";
import { CardProduct } from "./CardProduct";

interface IListProducts {
  products: IProduct[];
}

export const ListProducts: FC<IListProducts> = ({ products }) => {
  return (
    <Container>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </Grid>
    </Container>
  );
};
