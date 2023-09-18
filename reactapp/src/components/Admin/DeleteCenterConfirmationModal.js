import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function DeleteCenterConfirmationModal({
  open,
  handleClose,
  onConfirmDelete,
}) {
  const handleConfirmation = () => {
    onConfirmDelete(); // Call the onConfirmDelete function
    handleClose(); // Close the modal
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Delete Confirmation</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this service center?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleConfirmation} color="primary">
          Confirm Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
