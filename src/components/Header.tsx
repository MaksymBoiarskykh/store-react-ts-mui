import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ShoppingBasket } from "@mui/icons-material";
import { Badge, Container } from "@mui/material";

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
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
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Store
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <ShoppingBasket />
              </Badge>
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
