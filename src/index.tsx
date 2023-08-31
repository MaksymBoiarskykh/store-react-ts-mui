import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material";
import { getDesignTokens } from "./theme";
import { setupStore } from "./store/store";
import "./style/normalize.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const store = setupStore();
const theme = createTheme(getDesignTokens("light"));

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);
