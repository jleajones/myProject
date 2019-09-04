import React from 'react';
// import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import withTheme from '@material-ui/core/styles/withTheme';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
// import InfoIcon from '@material-ui/icons/InfoOutlined';
// import Divider from '@material-ui/core/Divider';
// import makeStyles from '@material-ui/core/styles/makeStyles';

const FooterGroup = ({ theme, title, items }) => {
  return (
    <Grid item xs={12} sm={3}>
      <Typography
        variant="button"
        component="p"
        style={{
          color: theme.palette.grey[200],
          marginBottom: theme.spacing(2)
        }}
      >
        <b>{title}</b>
      </Typography>
      <Grid container alignItems="center">
        <Grid item>
          {items.map(item => (
            <Typography
              variant="body2"
              component="p"
              style={{
                color: theme.palette.primary.light,
                marginBottom: theme.spacing(1)
              }}
              key={item}
            >
              {item}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

FooterGroup.propTypes = {
  theme: PropTypes.shape().isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default withTheme(FooterGroup);
