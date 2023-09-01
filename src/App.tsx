import { FC } from "react";
import { Header } from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
