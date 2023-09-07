import { Box, Grid, Rating } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IProduct } from "../models/IProduct";
import { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import BasketButton from "./BasketButton";
import { styled } from "@mui/material/styles";

const BoxStyled = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

interface ICardProduct {
  product: IProduct;
}

const CardProduct: FC<ICardProduct> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <>
      <Grid item xs={12} sm={6} lg={4} xl={3}>
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            pb: 2,
          }}
        >
          <BoxStyled
            sx={{
              height: "200px",
              width: "100%",
              mt: 1,
              justifyContent: "center",
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
          </BoxStyled>
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h6" component="div">
              {product.title}
            </Typography>
            <BoxStyled sx={{ justifyContent: "space-between" }}>
              <Typography variant="h5" color="text.secondary">
                {product.price}$
              </Typography>
              <Rating value={product.rating.rate} readOnly />
            </BoxStyled>
          </CardContent>
          <CardActions>
            <BasketButton id={+product.id - 1} />
            <Button
              size="small"
              variant="outlined"
              color="info"
              onClick={() => navigate(`/products/${product.id}`)}
            >
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default memo(CardProduct);
