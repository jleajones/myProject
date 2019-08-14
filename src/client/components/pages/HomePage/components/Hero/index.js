import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const Hero = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item>
          <Typography variant="h6">Home Page</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
