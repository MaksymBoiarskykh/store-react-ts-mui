import { FC } from "react";
import { Box } from "@mui/material";
import { Header } from "./components/Header";
import { Products } from "./pages/Products";

const App: FC = () => {
  return (
    <Box className="App">
      <Header />
      <Products />
    </Box>
  );
};

export default App;
