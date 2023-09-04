import { Container, Typography } from "@mui/material";
import { BasketTable } from "../components/BasketTable";
import { useTypedSelector } from "../hooks/useTypedSelector";

export default function BasicTable() {
  const { idProducts } = useTypedSelector(
    (state) => state.basketProductsReducer
  );
  return (
    <Container sx={{ mt: 10 }}>
      {idProducts.length ? (
        <BasketTable idProducts={idProducts} />
      ) : (
        <Typography variant="h3" component="div" sx={{ textAlign: "center" }}>
          isn't any products
        </Typography>
      )}
    </Container>
  );
}
