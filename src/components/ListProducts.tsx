import { Container, Grid, Typography } from "@mui/material";
import { IProduct } from "../models/IProduct";
import { FC } from "react";
import { CardProduct } from "./CardProduct";

interface IListProducts {
  products: IProduct[];
}

export const ListProducts: FC<IListProducts> = ({ products }) => {
  return (
    <>
      <Container>
        {products.length ? (
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {products.map((product) => (
              <CardProduct key={product.id} product={product} />
            ))}
          </Grid>
        ) : (
          <Typography
            variant="h3"
            component="div"
            sx={{ textAlign: "center", mt: 10 }}
          >
            Isn't any product
          </Typography>
        )}
      </Container>
    </>
  );
};
