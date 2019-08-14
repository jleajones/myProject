import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/core/styles/makeStyles';

import EnhancedPaper from '@shared/EnhancedPaper';

const useStyles = makeStyles({
  pageview: {
    borderColor: 'rgba(63, 81, 188, 0.35)'
  },
  interaction: {
    borderColor: 'rgba(63, 81, 188, 0.55)'
  }
});

const Dashboard = ({ data }) => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container spacing={2}>
        {data.map(item => {
          const keys = Object.keys(item);
          const itemId = item.id || item.eventId;

          return (
            <Grid item key={itemId} xs={12}>
              <EnhancedPaper
                classFromParent={{
                  child: classes[item.eventType]
                }}
                label={`${itemId}`}
                category="hero"
              >
                {/* eslint-disable-next-line array-callback-return,consistent-return */}
                {keys.map(key => {
                  const value = item[key];
                  const isObject = typeof value === 'object';
                  if (
                    (value && !isObject) ||
                    (value && isObject && Object.keys(value).length > 0)
                  ) {
                    return (
                      <Typography key={`${itemId}-${key}`}>
                        <b>{key}</b>{' '}
                        {isObject ? JSON.stringify(item[key]) : item[key]}
                      </Typography>
                    );
                  }
                })}
              </EnhancedPaper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

Dashboard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Dashboard;
