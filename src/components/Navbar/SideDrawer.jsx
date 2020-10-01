import { Drawer, IconButton, List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Menu } from '@material-ui/icons';
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `black`,
  },
});

const SideDrawer = () => {
  const { authenticated } = useAuth();
  const classes = useStyles();
  const [state, setState] = useState({ left: false });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ [anchor]: open });
  };
  const sideDrawerList = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component="nav">
        <Link to="/" style={{ color: `black` }}>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        {authenticated ? (
          <Link to="/favorites">
            <ListItem button>
              <ListItemText primary="Favorites" style={{ color: `black` }} />
            </ListItem>
          </Link>
        ) : (
          ''
        )}
      </List>
    </div>
  );
  return (
    <>
      <IconButton edge="start" aria-label="menu" onClick={toggleDrawer('left', true)}>
        <Menu fontSize="small" style={{ color: `white` }} />
      </IconButton>
      <Drawer
        anchor="left"
        open={state.left}
        onOpen={toggleDrawer('left', true)}
        onClose={toggleDrawer('left', false)}
      >
        {sideDrawerList('left')}
      </Drawer>
    </>
  );
};
export default SideDrawer;
