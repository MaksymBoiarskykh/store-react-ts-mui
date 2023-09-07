import { FC } from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { ISnackBar } from "../models/ISnackBar";

interface ISnackbarMassage {
  visible: ISnackBar;
  setVisible: (value: ISnackBar) => void;
}

export const SnackbarMassage: FC<ISnackbarMassage> = ({
  visible,
  setVisible,
}) => {
  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => setVisible({ status: false })}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <div>
      <Snackbar
        open={visible.status}
        autoHideDuration={1000}
        onClose={() => setVisible({ status: false })}
        message={visible.text}
        action={action}
      />
    </div>
  );
};
