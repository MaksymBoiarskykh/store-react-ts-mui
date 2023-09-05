import { useParams } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Container, Typography } from "@mui/material";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import BasketButton from "../components/BasketButton";

interface IParam {
  id: string | undefined;
}

export const ProductInfo = () => {
  const { products } = useTypedSelector((state) => state.productsReducer);
  const param = useParams<{ id: string | undefined }>() as IParam;

  if (!param.id) {
    return (
      <Container sx={{ mt: 10 }}>
        <Typography variant="h3" component="div">
          error
        </Typography>
      </Container>
    );
  }

  const id = Number(param.id) - 1;

  return (
    <Container sx={{ mt: 10 }}>
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "60%",
          }}
        >
          <Typography variant="h4" sx={{ flex: "1 0 auto" }}>
            {products[id].title}
          </Typography>
          <Typography
            sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
          >
            {products[id].description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              mb: 1,
            }}
          >
            <Typography variant="h5">price: {products[id].price}₴</Typography>
            <Typography variant="h5">
              rating: {products[id].rating.rate}/5
            </Typography>
          </Box>
          <BasketButton id={+param.id}>Add to basket</BasketButton>
        </Box>
        <CardMedia
          component="img"
          sx={{ maxWidth: "25%", width: "200px" }}
          image={products[id].image}
          alt="Live from space album cover"
        />
      </Card>
    </Container>
  );
};
