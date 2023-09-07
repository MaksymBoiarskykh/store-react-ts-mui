import { Button, Container, Typography } from "@mui/material";
import { BasketTable } from "../components/BasketTable";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const Basket = () => {
  const { idProducts } = useTypedSelector(
    (state) => state.basketProductsReducer
  );
  return (
    <Container sx={{ margin: "80px auto 30px" }}>
      {idProducts.length ? (
        <BasketTable idProducts={idProducts} />
      ) : (
        <Typography variant="h3" component="div" sx={{ textAlign: "center" }}>
          isn't any products
        </Typography>
      )}
      <Button variant="contained" color="info" sx={{ width: "100%", mt: 1 }}>
        buy
      </Button>
    </Container>
  );
};
