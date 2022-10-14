import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

export const NavBar = () => {
  return (
    <AppBar position='fixed'>
        <Toolbar sx={{display:'flex',flexDirection:'row-reverse',justifyContent:'space-between'}}>
            <IconButton size='large'>
                <MenuOpenIcon/>
            </IconButton>
            <Typography component='h1' variant='h6'>
                Cosechadora Reyes
            </Typography>
        </Toolbar>
    </AppBar>
  )
}
