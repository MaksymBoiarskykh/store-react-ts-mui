import { FC } from "react";
import { Header } from "./components/Header";
import { HashRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";

const App: FC = () => {
  return (
    <HashRouter>
      <Header />
      <AppRouter />
    </HashRouter>
  );
};

export default App;
