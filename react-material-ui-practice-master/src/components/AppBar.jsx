import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar variant='elevation' position="static" sx={{ backgroundColor:"#0d47a1",borderRadius:"7px"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            Blog
          </Typography>
          <Button color='inherit' sx={{marginRight:"7px"}}>Register</Button>
          <Button variant='contained' sx={{backgroundColor:"#1976d2"}}>Login</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{display:"flex",flexGrow:1,justifyContent:"space-around",margin:"15px",flexWrap:"wrap"}}>
      <Link href="#" underline='none' sx={{marginRight:"7px",marginBottom:"7px"}}>Technology</Link>
      <Link href="#" underline='none' sx={{marginRight:"7px",marginBottom:"7px"}}>Design</Link>
      <Link href="#" underline='none' sx={{marginRight:"7px",marginBottom:"7px"}}>Culture</Link>
      <Link href="#" underline='none' sx={{marginRight:"7px",marginBottom:"7px"}}>Business</Link>
      <Link href="#" underline='none' sx={{marginRight:"7px",marginBottom:"7px"}}>Politics</Link>
      <Link href="#" underline='none' sx={{marginRight:"7px",marginBottom:"7px"}}>Opinion</Link>
      <Link href="#" underline='none' sx={{marginRight:"7px",marginBottom:"7px"}}>Science</Link>
      <Link href="#" underline='none' sx={{marginRight:"7px",marginBottom:"7px"}}>Health</Link>
      <Link href="#" underline='none' sx={{marginRight:"7px",marginBottom:"7px"}}>Style</Link>
      <Link href="#" underline='none' sx={{marginRight:"7px",marginBottom:"7px"}}>Travel</Link>

      </Box>
      <Box>
        <img src="../logo.svg" alt="" />
      </Box>
    </Box>
  );
}
