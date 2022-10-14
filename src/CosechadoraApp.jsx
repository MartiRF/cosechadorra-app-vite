import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { InicioPage } from './cosechadorra/pages/InicioPage'
import { LocalizationProvider } from '@mui/x-date-pickers';

export const CosechadoraApp = () => {
  return ( 
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <InicioPage />
    </LocalizationProvider>
    </>
  )
}
