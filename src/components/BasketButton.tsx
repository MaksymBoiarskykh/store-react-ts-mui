import { Button } from "@mui/material";
import { useActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { SnackbarMassage } from "./Snackbar";
import { ISnackBar } from "../models/ISnackBar";
import { FC, useState } from "react";

interface IBasketButton {
  id: number;
}

type ICallback = (id: number) => void;

const BasketButton: FC<IBasketButton> = ({ id }) => {
  const { selectProduct, removeProduct } = useActions();
  const { idProducts } = useTypedSelector(
    (state) => state.basketProductsReducer
  );
  const [added, setAdded] = useState(idProducts.some((el) => el === id));

  const [massage, setMassage] = useState<ISnackBar>({
    status: false,
    text: "",
  });

  const changeMessageVisibility = (value: ISnackBar) => {
    setMassage(value);
  };

  const createEvent = (callback: ICallback, massage: string) => {
    callback(id);
    setMassage({ status: true, text: massage });
    setAdded(!added);
  };

  return (
    <>
      <Button
        size="small"
        variant="contained"
        color={added ? "success" : "info"}
        onClick={() =>
          added
            ? createEvent(removeProduct, "remove from basket")
            : createEvent(selectProduct, "add to basket")
        }
      >
        {added ? "remove product" : "add to basket"}
      </Button>
      <SnackbarMassage visible={massage} setVisible={changeMessageVisibility} />
    </>
  );
};

export default BasketButton;
