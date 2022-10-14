import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { Container } from '@mui/system'

export const LoginPage = () => {
  return (
    <Container component='main'>
      <Box sx={{marginTop:6,display:'flex',flexDirection:'column',alignItems:'center'}}>
        <Typography component='h1' variant='h5'>Inicion de Seccion</Typography>
      </Box>

      <Box component='form' >
        <TextField
          margin='normal'
          required
          fullWidth
          id='email'
          label='Correo'
          name='email'
          autoFocus/>
        <TextField
          margin='normal'
          required
          fullWidth
          type='password'
          label='password'
          name='password'
          id='password'/>

        <Button
          fullWidth
          variant='contained'>
          Entrar
        </Button>  
      </Box>
    </Container>
  )
}
