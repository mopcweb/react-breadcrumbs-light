/* ################################################################### */
/*
/*  Header component
/*
/* ################################################################### */

import React, { useState } from 'react';

/* ------------------------------------------------------------------- */
/*                            Material
/* ------------------------------------------------------------------- */

import { withStyles } from '@material-ui/styles';

// =====> Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

// =====> Icons
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import InputIcon from '@material-ui/icons/Input';
import AccountCircle from '@material-ui/icons/AccountCircle';

/* ------------------------------------------------------------------- */
/*                              Config
/* ------------------------------------------------------------------- */

// =====> Styles
import styles from './styles';

// =====> Type
type Props = {
  classes: { [x: string]: string };
  toggleNav: (event: React.MouseEvent) => void
};

/* ------------------------------------------------------------------- */
/*                             Component
/* ------------------------------------------------------------------- */

const Header: React.FC<Props> = ({ classes, toggleNav }) => {
  // State
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);

  // Handle menu open
  const openMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchor(event.currentTarget);

  // Handle menu close
  const closeMenu = () =>
    setAnchor(null);

  // Profile menu
  const menu = (
    <Menu
      anchorEl={anchor}
      open={!!anchor}
      onClose={closeMenu}
    >
      <MenuItem onClick={closeMenu}>
        <PersonIcon />
        <span className={classes.MenuItem}>Profile</span>
      </MenuItem>
      <MenuItem onClick={closeMenu}>
        <InputIcon />
        <span className={classes.MenuItem}>Logout</span>
      </MenuItem>
    </Menu>
  );

  // Render
  return (
    <AppBar className={classes.Root}>
      <Toolbar>
        <IconButton className={classes.Btn}
          edge='start' color='primary' aria-label='Menu'
          onClick={toggleNav}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant='h6' className={classes.Title}>
          Easy deploy
        </Typography>

        <IconButton
          edge="end"
          aria-owns={'material-appbar'}
          aria-haspopup="true"
          color="inherit"
          onClick={openMenu}
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>

      {menu}
    </AppBar>
  );
};

/* ------------------------------------------------------------------- */
/*                              Export
/* ------------------------------------------------------------------- */

export default withStyles(styles)(Header)
