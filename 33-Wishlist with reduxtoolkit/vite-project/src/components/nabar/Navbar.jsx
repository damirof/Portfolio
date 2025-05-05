import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{display: "flex", justifyContent: "space-between"}}>
       <div style={{display: "flex", justifyContent: "space-between", alignItems:"center"}}>
       <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <h2 >
            Logo
          </h2>
       </div>
  
  <div style={{display: "flex", justifyContent: "space-between", alignItems:"center"}}>
  <FavoriteIcon/>

<Button color="inherit">Login</Button>
  </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
