import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>Add user</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={5}>
            <Grid item xs={6}>
            <TextField id="standard-basic" label="Name" variant="standard" />
            </Grid>
            <Grid item xs={6}>
            <TextField id="standard-basic" label="Email" variant="standard" />
            </Grid>
            <Grid item >
            <TextField id="standard-basic" label="Address" variant="standard" />
            </Grid>
          </Grid>
          <Button color="inherit" variant="outlined" sx={{ mt: 5 }} onClick={handleOpen}>Add</Button>
        </Box>
      </Modal>
    </div>
  );
}