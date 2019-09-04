import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import withTheme from '@material-ui/core/styles/withTheme';

const Hero = ({ theme }) => {
  return (
    <div
      style={{
        backgroundColor: theme.palette.primary.light,
        height: '400px'
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item>
            <Typography variant="h6">Home Page</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

Hero.propTypes = {
  theme: PropTypes.shape().isRequired
};

export default withTheme(Hero);
