import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
  }
}));

const Hero = ({ users }) => {
  const classes = useStyles();
  const keys = users.length ? Object.keys(users[0]) : [];
  return (
    <Container>
      <Grid container spacing={2}>
        {users.map(user => (
          <Grid item key={user.id} xs={12}>
            <Paper className={classes.paper}>
              {keys.map(key => (
                <Typography key={`${user.id}-${key}`}>
                  <b>{key}</b> {user[key]}
                </Typography>
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

Hero.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Hero;
