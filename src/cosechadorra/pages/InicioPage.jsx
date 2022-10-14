import React from 'react'
import { Grid, Toolbar, Typography } from '@mui/material'
import { NavBar } from '../components/navBar/NavBar'
import { ClientesTabla } from '../components'
import { AgregarBoton } from '../components/agregarBoton/AgregarBoton'
import { AgregarClientePage } from './AgregarClientePages'

export const InicioPage = () => {
  return (
    <>
        <NavBar/>
        <Toolbar/>
        {/* <Grid container mt={2}>
            <Typography component='h1' variant='h4'>Pendientes:</Typography>
            <Grid container mt={3}>
                <ClientesTabla />
            </Grid>
        </Grid> */}
        <AgregarClientePage />
        <AgregarBoton/>
    </>
  )
}
