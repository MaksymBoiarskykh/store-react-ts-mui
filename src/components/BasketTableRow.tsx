import {
  Avatar,
  IconButton,
  TableCell,
  TableRow,
  TextField,
} from "@mui/material";
import { ChangeEvent, FC, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useAction";

interface IBasketTableCell {
  id: number;
}

export const BasketTableRow: FC<IBasketTableCell> = ({ id }) => {
  const { products } = useTypedSelector((state) => state.productsReducer);
  const { removeProduct } = useActions();
  const [number, setNumber] = useState(1);

  return (
    <>
      <TableRow
        key={id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell align="center">
          <Avatar
            sx={{
              display: "inline-block",
              width: 50,
              height: 70,
              objectFit: "contain",
            }}
            variant="square"
            src={products[id].image}
          />
        </TableCell>
        <TableCell align="center">
          <TextField
            sx={{ maxWidth: "100px", textAlign: "center" }}
            type="number"
            value={number}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setNumber(+e.target.value)
            }
          />
        </TableCell>
        <TableCell align="center">{number * +products[id].price}$</TableCell>
        <TableCell align="center">
          <IconButton onClick={() => removeProduct(id)}>
            <CloseIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
};
