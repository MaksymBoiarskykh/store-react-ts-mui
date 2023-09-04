import { Button } from "@mui/material";
import { useActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { SnackbarMassage } from "./Snackbar";
import { ISnackBar } from "../models/ISnackBar";
import { FC, useState } from "react";

interface IBasketButton {
  id: number;
  children: string;
}

export const BasketButton: FC<IBasketButton> = ({ id, children }) => {
  const { selectProduct } = useActions();
  const { idProducts } = useTypedSelector(
    (state) => state.basketProductsReducer
  );

  const [massage, setMassage] = useState<ISnackBar>({
    status: false,
    text: "",
  });

  const changeMessageVisibility = (value: ISnackBar) => {
    setMassage(value);
  };

  const pushToBasket = () => {
    if (!idProducts.some((el) => el === id)) {
      selectProduct(id);
      setMassage({ status: true, text: "product add to basket" });
    } else {
      setMassage({
        status: true,
        text: "product has already added to basket",
      });
    }
  };

  return (
    <>
      <Button
        size="small"
        variant="contained"
        color="info"
        onClick={pushToBasket}
      >
        {children}
      </Button>
      <SnackbarMassage visible={massage} setVisible={changeMessageVisibility} />
    </>
  );
};

export default BasketButton;
