import {
  Avatar,
  IconButton,
  TableCell,
  TableRow,
  TextField,
} from "@mui/material";
import { ChangeEvent, FC, memo, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useActions } from "../hooks/useAction";
import { productsApi } from "../store/reducers/api/productsApi";
import { styled } from "@mui/material/styles";

const AvatarStyled = styled(Avatar)(() => ({
  display: "inline-block",
  width: 50,
  height: 70,
  objectFit: "contain",
}));

interface IBasketTableCell {
  id: number;
}

const BasketTableRow: FC<IBasketTableCell> = ({ id }) => {
  const { data: products, error } = productsApi.useFetchProductsQuery("");
  const { removeProduct } = useActions();
  const [number, setNumber] = useState(1);

  if (error || !products) {
    return <h1>error</h1>;
  }

  return (
    <>
      <TableRow
        key={id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell align="center">
          <AvatarStyled variant="square" src={products[id].image} />
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

export default memo(BasketTableRow);
