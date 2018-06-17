import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Grid from 'material-ui/Grid';

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
