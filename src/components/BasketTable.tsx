import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import { useTypedSelector } from "../hooks/useTypedSelector";
import { BasketTableRow } from "./BasketTableRow";
import { FC } from "react";

const rows: string[] = ["image", "number", "price", "remove"];

interface IBasketTable {
  idProducts: number[];
}
export const BasketTable: FC<IBasketTable> = ({ idProducts }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {rows.map((el) => (
              <TableCell key={el} align="center">
                {el}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {idProducts.map((id) => (
            <BasketTableRow key={id} id={id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
  return <div>hello</div>;
};
