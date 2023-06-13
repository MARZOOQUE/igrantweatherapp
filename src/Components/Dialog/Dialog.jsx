import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Table from "../Table/Table";

export default function AlertDialog({ open, setOpen, details }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Table details={details} />
      </Dialog>
    </div>
  );
}
