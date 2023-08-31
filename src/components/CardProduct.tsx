import { Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IProduct } from "../models/IProduct";
import { FC } from "react";

interface ICardProduct {
  product: IProduct;
}

export const CardProduct: FC<ICardProduct> = ({ product }) => {
  return (
    <Grid item xs={6} sm={4} md={3}>
      <Card
        sx={{
          maxHeight: 400,
        }}
      >
        <Box
          sx={{
            height: "200px",
            width: "100%",
            mt: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            sx={{
              maxWidth: "80%",
              width: "auto",
              maxHeight: "100%",
            }}
            image={product.image}
          />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Buy</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
