import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GasIcon from '@material-ui/icons/LocalGasStation';
import VehicleIcon from '@material-ui/icons/AirportShuttle';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import withTheme from '@material-ui/core/styles/withTheme';

const CountDisplay = ({ styles, value }) => (
  <CircularProgress
    variant="static"
    value={value}
    thickness={4}
    size={220}
    style={{ ...styles }}
  />
);

CountDisplay.propTypes = {
  styles: PropTypes.shape().isRequired,
  value: PropTypes.number.isRequired
};

const MAX_NPS = 5;
const SHIPPER_NPS = 4.3;
const DRIVER_NPS = 4.8;
const MAX_SHIPPER_NPS = (100 / MAX_NPS) * SHIPPER_NPS;
const MAX_DRIVER_NPS = (100 / MAX_NPS) * DRIVER_NPS;

const Stats = ({ theme }) => {
  const [shipperNpsDisplay, setShipperNpsDisplay] = useState(0);
  const [driverNpsDisplay, setDriverNpsDisplay] = useState(0);

  setTimeout(() => {
    if (shipperNpsDisplay < MAX_SHIPPER_NPS) {
      setShipperNpsDisplay(shipperNpsDisplay + 1);
    }

    if (driverNpsDisplay < MAX_DRIVER_NPS) {
      setDriverNpsDisplay(driverNpsDisplay + 1);
    }
  }, 0);

  return (
    <div
      style={{
        backgroundColor: theme.palette.common.white,
        padding: theme.spacing(5)
      }}
    >
      <Container>
        <Grid container justify="center" style={{ textAlign: 'center' }}>
          <Grid item xs={12} sm={8}>
            <Typography
              variant="h2"
              component="h3"
              style={{
                color: theme.palette.grey[400],
                padding: `${theme.spacing(2)}px 0 0`
              }}
              align="center"
            >
              Some Heading Here
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              style={{
                color: theme.palette.grey[400],
                padding: `${theme.spacing(2)}px 0 0`,
                marginBottom: `${theme.spacing(4)}px`
              }}
              align="center"
            >
              We work with over 1000 brokers and have a fleet including 12
              tractors and 20 trailers. We save everyone time and money.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5}>
            <CountDisplay
              value={shipperNpsDisplay}
              styles={{ color: theme.palette.primary.main }}
            />
            <Typography
              variant="h5"
              component="p"
              style={{
                color: theme.palette.grey[400],
                marginTop: theme.spacing(2)
              }}
              align="center"
            >
              Shipper NPS Score
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5}>
            <CountDisplay
              value={driverNpsDisplay}
              styles={{ color: theme.palette.primary.main }}
            />
            <Typography
              variant="h5"
              component="p"
              style={{
                color: theme.palette.grey[400],
                marginTop: theme.spacing(2)
              }}
              align="center"
            >
              Driver NPS Score
            </Typography>
          </Grid>
        </Grid>

        <Divider
          style={{
            marginTop: theme.spacing(8),
            marginBottom: theme.spacing(8)
          }}
        />

        <Grid container spacing={4}>
          <Grid item md={4}>
            <Typography align="center">
              <TrendingUpIcon
                style={{
                  width: '64px',
                  height: '64px',
                  color: theme.palette.grey[400]
                }}
              />
            </Typography>
            <Typography
              variant="h3"
              component="p"
              align="center"
              style={{
                color: theme.palette.grey[400]
              }}
            >
              217
            </Typography>
            <Typography
              variant="overline"
              component="p"
              align="center"
              color="primary"
            >
              Loads Booked
            </Typography>
          </Grid>
          <Grid item md={4}>
            <Typography align="center">
              <VehicleIcon
                style={{
                  width: '64px',
                  height: '64px',
                  color: theme.palette.grey[400]
                }}
              />
            </Typography>
            <Typography
              variant="h3"
              component="p"
              align="center"
              style={{
                color: theme.palette.grey[400]
              }}
            >
              770k
            </Typography>
            <Typography
              variant="overline"
              component="p"
              align="center"
              color="primary"
            >
              Miles Traveled
            </Typography>
          </Grid>
          <Grid item md={4}>
            <Typography align="center">
              <GasIcon
                style={{
                  width: '64px',
                  height: '64px',
                  color: theme.palette.grey[400]
                }}
              />
            </Typography>
            <Typography
              variant="h3"
              component="p"
              align="center"
              style={{
                color: theme.palette.grey[400]
              }}
            >
              $7500
            </Typography>
            <Typography
              variant="overline"
              component="p"
              align="center"
              color="primary"
            >
              Savings on Fuel
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

Stats.propTypes = {
  theme: PropTypes.shape().isRequired
};

export default withTheme(Stats);
