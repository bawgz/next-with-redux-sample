import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';

const Navbar = () => (
  <div>
    <AppBar position="static" variant="raised" color="primary">
      <Grid container justify="center">
        <Grid item>
          <Toolbar>
            <Link href="/">
              <img
                alt=""
                style={{ height: '45px', cursor: 'pointer' }}
                src="/static/logo.jpg"
              />
            </Link>
          </Toolbar>
        </Grid>
      </Grid>
    </AppBar>
  </div>
);

export default Navbar;
