import { useParams } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Container, Typography } from "@mui/material";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

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

  return (
    <Container sx={{ mt: 10 }}>
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}></CardContent>
          <Box
            sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
          ></Box>
        </Box>
        {/* <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={products[Number(param.id)].image}
          alt="Live from space album cover"
        /> */}
      </Card>
    </Container>
  );
};
