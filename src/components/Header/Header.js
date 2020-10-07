import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuItem: {
    color: 'White',
    fontSize: '18px',
    textDecoration: 'none',
    padding: '10px',
    marginRight: '25px',
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: 'lightgray',
    }
    
  },
}));


const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Breaking-News
          </Typography>
          <Link href="/home" className={classes.menuItem}>
            Home
          </Link>
          <Link href="/posts" className={classes.menuItem}>
            Posts
          </Link>
        </Toolbar>
      </AppBar>
  
    );
};

export default Header;