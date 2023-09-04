import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material";
import { getDesignTokens } from "./theme";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import "./styles/index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = createTheme(getDesignTokens("light"));

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>
);
