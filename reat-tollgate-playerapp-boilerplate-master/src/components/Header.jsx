import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";


export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Players List
          </Typography>
          <Link
            to={"/showplayer"}
            style={{
              color: "inherit",
              textDecoration: "none",
              marginLeft: "20px",
            }}
          >
            show Players
          </Link>
          <Link
            to={"/addplayer"}
            style={{
              color: "inherit",
              textDecoration: "none",
              marginLeft: "20px",
            }}
          >
            Add Books
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
