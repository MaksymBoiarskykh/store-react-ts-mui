import { useParams } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import BasketButton from "../components/BasketButton";
import { productsApi } from "../store/reducers/api/productsApi";
import { styled } from "@mui/material/styles";

const PhotoBlock = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "flex",
    justifyContent: "center",
  },

  [theme.breakpoints.up("md")]: {
    justifyContent: "end",
  },
  margin: "0 auto",
}));

interface IParam {
  id: string | undefined;
}

export const ProductInfo = () => {
  const { data: products } = productsApi.useFetchProductsQuery("");
  const param = useParams<{ id: string | undefined }>() as IParam;

  if (!param.id || !products) {
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
      <Grid container spacing={4} sx={{ justifyContent: "space-between" }}>
        <Grid
          item
          xs={12}
          md={9}
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
              justifyContent: "space-between",
              width: "100%",
              mb: 1,
            }}
          >
            <Typography variant="h5">price: {products[id].price}$</Typography>
            <Typography variant="h5">
              rating: {products[id].rating.rate}/5
            </Typography>
          </Box>
          <BasketButton id={+param.id} />
        </Grid>
        <PhotoBlock item xs={8} md={3}>
          <CardMedia
            component="img"
            sx={{ maxHeight: "250px", width: "auto" }}
            image={products[id].image}
          />
        </PhotoBlock>
      </Grid>
    </Container>
  );
};
