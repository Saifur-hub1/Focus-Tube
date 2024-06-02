import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

const extractPlaylistId = (input) => {
  const urlPattern = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/.*(?:\?|&)list=([a-zA-Z0-9_-]+)/;
  const match = input.match(urlPattern);
  return match ? match[1] : input;
};


const FormDialog = ({fetchData, exist, resetExist}) => {
  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  useEffect(() => {
    if (exist) {
      setSnackbarOpen(true);
      resetExist();
    }
  },[exist])

  return (
    <>
      <IconButton
        color="primary"
        onClick={handleClickOpen}
        sx={{
          marginTop: 2,
          marginBottom: 2,
          border: '1px solid',
          borderColor: 'primary.main'
        }}
      >
        <AddIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            let link = formJson.link;
            link = extractPlaylistId(link);
            fetchData(link);
            console.log(link);
            handleClose();
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter a valid link or id of a playlist to add.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="link"
            label="Link or id"
            type="text"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="warning"
          sx={{ width: "100%" }}
        >
          It already exists
        </Alert>
      </Snackbar>
    </>
  );
};

export default FormDialog;
