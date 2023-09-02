import { useTypedSelector } from "../hooks/useTypedSelector";
import List from "@mui/material/List";
import { Container } from "@mui/material";
import BasketProduct from "../components/BasketProduct";

export const Basket = () => {
  const { products } = useTypedSelector((state) => state.basketProductsReducer);

  return (
    <Container sx={{ mt: 10 }}>
      <List dense sx={{ width: "100%" }}>
        {products.map((product) => (
          <BasketProduct product={product} key={product.id} />
        ))}
      </List>
    </Container>
  );
};

export default Basket;
