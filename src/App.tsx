import { useEffect } from "react";
import { Header } from "./components/Header";
import { useActions } from "./hooks/useAction";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { ListProducts } from "./components/ListProducts";

const App = () => {
  const { fetchProducts } = useActions();
  const { products } = useTypedSelector((state) => state.productsReducer);

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div className="App">
      <Header />
      <ListProducts products={products} />
    </div>
  );
};

export default App;
