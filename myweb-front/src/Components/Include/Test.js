import React, { Component } from 'react';

import { Grid, TextField, Button, Container } from '@material-ui/core';

class Test extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={0}>
          <Grid item sm={12} md={4}>
            <Container maxWidth="xs">
            <form>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >Sign In</Button>
            </form>
            </Container>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Test;