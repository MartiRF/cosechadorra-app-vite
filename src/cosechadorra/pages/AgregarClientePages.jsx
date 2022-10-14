import React, { useState } from 'react'
import { Fab, Grid, TextField, Toolbar } from '@mui/material'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import dayjs from 'dayjs';

export const AgregarClientePage = () => {


  const [value, setValue] = useState(dayjs());

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Toolbar/>
      <Grid container direction='row'  alignItems='center' justifyContent='space-around'>
        <Grid container >
          <TextField
            type='text'
            fullWidth
            placeholder='Nombre'
            label='Nombre'
            name='nombre'
            sx={{mb:2}}
            />
        </Grid>
        <Grid container >
          <MobileDatePicker
            label="Date mobile"
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField fullWidth  sx={{mb:2}} {...params} />}
          />
        </Grid>
        <Grid container >
          <TextField
            type='text'
            fullWidth
            placeholder='Lugar'
            label='Lugar'
            name='lugar'
            sx={{mb:2}}
            />
        </Grid>
        <Grid container >
          <TextField
            type='number'
            fullWidth
            placeholder='Hectareas'
            label='Hectareas'
            name='hectareas'
            sx={{mb:2}}
            />
        </Grid>
        <Grid container >
          <TextField
            type='number'
            fullWidth
            placeholder='Telefono'
            label='Telefono'
            name='telefono'
            sx={{mb:2}}
            />
        </Grid>

        <Grid item>
          <Fab color='primary'>
            <DoneIcon/>
          </Fab>
        </Grid>
        <Grid  item>
          <Fab color='error'>
            <CloseIcon/>
          </Fab>
        </Grid>
      </Grid>
    </>
  )
}
