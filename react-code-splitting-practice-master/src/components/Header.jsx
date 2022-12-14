import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function AppBarDense() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Books
          </Typography>
          <Link
            to={"/"}
            style={{
              color: "inherit",
              textDecoration: "none",
              marginLeft: "20px",
            }}
          >
            Home
          </Link>
          <Link
            to={"/addbooks"}
            style={{
              color: "inherit",
              textDecoration: "none",
              marginLeft: "20px",
            }}
          >
            Add Books
          </Link>

          <Link
            to={"/manage"}
            style={{
              color: "inherit",
              textDecoration: "none",
              marginLeft: "20px",
            }}
          >
            Manage
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
