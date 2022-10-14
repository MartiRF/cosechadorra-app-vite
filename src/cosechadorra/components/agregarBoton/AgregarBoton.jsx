import React, { useState } from 'react'
import { Box } from '@mui/system'
import { Button, Fab, Grid, Modal, Toolbar, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CloseIcon from '@mui/icons-material/Close';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 400,
  bgcolor: 'background.paper',
  borderRadius:20,
  boxShadow: 24,
  p: 4,
};

export const AgregarBoton = () => {

  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box>
        <Fab onClick={handleOpen} color='primary' sx={{position:'fixed',right:50,bottom:50}}>
            <AddIcon />
        </Fab>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid container sx={style} >
          <Fab onClick={handleClose} color='warning' sx={{position:'fixed',right:0,top:2}}>
            <CloseIcon />
          </Fab>
          <Toolbar/>
          <Grid container display='flex' flexDirection='column' spacing={1}>
            <Button size='large' sx={{mb:2}} fullWidth  variant='contained' endIcon={<PersonAddIcon/>}>
              Agregar Cliente
            </Button>
            <Button size='large' sx={{mb:2}} fullWidth  variant='contained' endIcon={<AttachMoneyIcon/>}> 
              Agregar Salida
            </Button>
            <Button size='large' sx={{mb:2}} fullWidth  variant='contained' endIcon={<AttachMoneyIcon/>}>
              Agregar Entrada
            </Button>
          <Toolbar/>
          </Grid>
        </Grid>
      </Modal>
    </>
  )
}
