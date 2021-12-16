import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom'
import storehouse from '../../assets/storehouse.png';
import useStyles from './styles';
import {logout} from 'react-icons-kit/iconic/logout';
import { Icon } from "react-icons-kit";

const Navbar = () => {
    const classes =useStyles();
    const location=useLocation();
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography  variant="h6" className={classes.title} color="inherit"  onClick={(event) => (window.location.href = "/home")}>
            <img src={storehouse} alt="Storehouse.js" height="40px"  className={classes.image} /> STOREHOUSE
          </Typography>
          <div className={classes.grow} />
          {location.pathname !== '/' && (
          <div className={classes.button}>
            <IconButton component={Link} to="/" aria-label="Show cart items" color="#fffdf2">
              <Icon icon={logout} size={20}  />
            </IconButton>
          </div>
           )}
        </Toolbar>
      </AppBar>
        </>
    );
};

export default Navbar;
