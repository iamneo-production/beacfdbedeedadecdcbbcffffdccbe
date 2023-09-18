import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";

export default function DeleteCenterConfirmationModal({
  open,
  handleClose,
}) {

    const navigate = useNavigate();
    const handleConfirmation = () => {
        handleClose();
        navigate(`/admin/CenterProfile/${userId}`);




  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delete Confirmation</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this service center?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            onConfirmDelete();
            onClose();
          }}
          color="primary"
        >
          Confirm Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
