import { Container, Grid, Typography } from "@mui/material";
import { IProduct } from "../models/IProduct";
import { FC, useState } from "react";
import { CardProduct } from "./CardProduct";
import { SnackbarMassage } from "./Snackbar";
import { ISnackBar } from "../models/ISnackBar";

interface IListProducts {
  products: IProduct[];
}

export const ListProducts: FC<IListProducts> = ({ products }) => {
  const [massage, setMassage] = useState<ISnackBar>({
    status: false,
    text: "",
  });

  const changeMessageVisibility = (value: ISnackBar) => {
    setMassage(value);
  };

  return (
    <>
      <Container>
        {products.length ? (
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {products.map((product) => (
              <CardProduct
                key={product.id}
                product={product}
                setMassage={changeMessageVisibility}
              />
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
      <SnackbarMassage visible={massage} setVisible={changeMessageVisibility} />
    </>
  );
};
