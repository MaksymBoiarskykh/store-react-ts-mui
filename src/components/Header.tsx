import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { ShoppingBasket } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useAction";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useScreenSize } from "../hooks/useScreenSize";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const { idProducts } = useTypedSelector(
    (state) => state.basketProductsReducer
  );
  const isBigSize = useScreenSize();
  const { changeSidebarStatus } = useActions();
  let location = useLocation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ zIndex: 1201 }}>
        <Toolbar>
          {!isBigSize && location.pathname === "/products" && (
            <IconButton
              onClick={() => changeSidebarStatus()}
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 2 }}
            >
              <FilterAltIcon />
            </IconButton>
          )}
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
          <Link className="link" to="/basket">
            <IconButton color="inherit">
              <Badge badgeContent={idProducts.length} color="secondary">
                <ShoppingBasket />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
