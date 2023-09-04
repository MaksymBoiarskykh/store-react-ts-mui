import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ShoppingBasket } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const Header = () => {
  const { idProducts } = useTypedSelector(
    (state) => state.basketProductsReducer
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ zIndex: 1201 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link className="link" to="/">
            <Typography variant="h6" component="div" sx={{ mr: 5 }}>
              Home
            </Typography>
          </Link>
          <Link className="link" to="/products">
            <Typography variant="h6" component="div" sx={{ mr: 5 }}>
              Products
            </Typography>
          </Link>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <IconButton color="inherit">
            <Badge badgeContent={idProducts.length} color="secondary">
              <Link className="link" to="/basket">
                <ShoppingBasket />
              </Link>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
