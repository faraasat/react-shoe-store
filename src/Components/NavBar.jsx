import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
    alignContent: "flex-start",
    justifyContent: "flex-start",
  },
  title: {
    justifySelf: "end",
  },
  links: {
    marginLeft: 20,
    textDecoration: "none",
    color: "white",
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className={classes.links}>
            <Typography variant="h5" className={classes.title}>
              Shoe Store
            </Typography>
          </Link>
          <Link to="/nike" className={classes.links}>
            Nike
          </Link>
          <Link to="/adidas" className={classes.links}>
            Adidas
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
