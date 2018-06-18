import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

const Navbar = () => (
  <div>
    <AppBar position="static" variant="raised" color="primary">
      <Grid container justify="center">
        <Grid item>
          <Toolbar>
            <img alt="" style={{ height: '45px' }} src="/static/logo.jpg" />
          </Toolbar>
        </Grid>
      </Grid>
    </AppBar>
  </div>
);

export default Navbar;
