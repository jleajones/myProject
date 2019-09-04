import React from 'react';
import PropTypes from 'prop-types';
import DevicesIcon from '@material-ui/icons/Devices';
import ForumIcon from '@material-ui/icons/Forum';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import withTheme from '@material-ui/core/styles/withTheme';
import Divider from '@material-ui/core/Divider';

const Features = ({ theme }) => {
  return (
    <div
      style={{
        backgroundColor: theme.palette.grey[100],
        padding: theme.spacing(5)
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item md={4}>
            <Typography align="center">
              <DevicesIcon
                style={{
                  width: '64px',
                  height: '64px',
                  color: theme.palette.primary.light
                }}
              />
            </Typography>
            <Typography
              variant="overline"
              component="h2"
              align="center"
              color="primary"
            >
              Premium Technology
            </Typography>
            <Typography
              align="center"
              color="textSecondary"
              variant="body2"
              paragraph
            >
              At <b>LJ&amp;G Freight</b>, you have access to the best technology
              &ndash; surfacing <strong>real-time data</strong> to help you book
              the best loads, travel the most efficient routes, track you
              shipments and fleet, and generate reports to identify areas of
              improvement.
            </Typography>
          </Grid>
          <Grid item md={4}>
            <Typography align="center">
              <PersonPinIcon
                style={{
                  width: '64px',
                  height: '64px',
                  color: theme.palette.primary.light
                }}
              />
            </Typography>
            <Typography
              variant="overline"
              component="h2"
              align="center"
              color="primary"
            >
              Total Control
            </Typography>
            <Typography
              align="center"
              color="textSecondary"
              variant="body2"
              paragraph
            >
              At <b>LJ&amp;G Freight</b>, you&apos;re in charge &ndash; choose
              the loads that meet <strong>your business needs</strong>. You are
              never penalized nor forced to take a load. Head out and go home
              whenever you want. We won&apos;t get in your way!
            </Typography>
          </Grid>
          <Grid item md={4}>
            <Typography align="center">
              <ForumIcon
                style={{
                  width: '64px',
                  height: '64px',
                  color: theme.palette.primary.light
                }}
              />
            </Typography>
            <Typography
              variant="overline"
              component="h2"
              align="center"
              color="primary"
            >
              24/7 Support
            </Typography>
            <Typography
              align="center"
              color="textSecondary"
              variant="body2"
              paragraph
            >
              At <b>LJ&amp;G Freight</b>, you&apos;ll have all the support you
              need &ndash; <strong>earn percentage pay</strong>, as rates go up,
              so do your settlements. Secure big discounts on fuel, tires,
              parts, service, and more.
            </Typography>
          </Grid>
        </Grid>

        <Divider
          style={{
            marginBottom: '16px'
          }}
        />
        <Grid container justify="center">
          <Grid item xs={12} sm={10}>
            <Typography
              variant="h3"
              component="p"
              style={{
                color: theme.palette.grey[300],
                padding: `${theme.spacing(2)}px 0 0`
              }}
              align="center"
            >
              &ldquo;Driving with LJ&amp;G Freight changed my life. I&apos;m
              able to be spend weekends with my family and focus on
              driving.&rdquo;
            </Typography>
            <Typography
              variant="button"
              component="p"
              style={{
                color: theme.palette.grey[400],
                padding: `${theme.spacing(2)}px 0 0`
              }}
              align="right"
            >
              - Mark Johnson
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

Features.propTypes = {
  theme: PropTypes.shape().isRequired
};

export default withTheme(Features);
