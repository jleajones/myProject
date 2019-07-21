import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';

import { USStatesForSelect } from '@constants/states';
import PropTypes from 'prop-types';

/**
 *
 * @param streetAddress
 * @param streetAddressCont
 * @param city
 * @param state
 * @param postalCode
 * @param updateStreetAddress
 * @param updateStreetAddressCont
 * @param updateCity
 * @param updateState
 * @param updatePostalCode
 * @param country
 * @param updateCountry
 * @returns {*}
 * @constructor
 */
const Address = ({
  streetAddress,
  streetAddressCont,
  city,
  state,
  postalCode,
  updateStreetAddress,
  updateStreetAddressCont,
  updateCity,
  updateState,
  updatePostalCode,
  country,
  updateCountry
}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">
          <b>Address</b>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          value={streetAddress}
          onChange={e => updateStreetAddress(e.target.value)}
          id="street-address"
          label="Street Address"
          placeholder="35 W. Park Ave"
          margin="normal"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          value={streetAddressCont}
          onChange={e => updateStreetAddressCont(e.target.value)}
          id="street-address-cont"
          label="Street Address (Cont)"
          placeholder="Unit 5"
          margin="normal"
          fullWidth
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          select
          value={country}
          onChange={e => updateCountry(e.target.value)}
          id="country"
          label="Country"
          margin="normal"
          fullWidth
          SelectProps={{
            native: true
          }}
        >
          <option />
          <option value="unitedStates">United States</option>
          <option value="canada">Canada</option>
        </TextField>
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          select
          value={state}
          onChange={e => updateState(e.target.value)}
          id="state"
          label="State/Province"
          margin="normal"
          fullWidth
          SelectProps={{
            native: true
          }}
        >
          <option />
          {USStatesForSelect.map(option => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          value={city}
          onChange={e => updateCity(e.target.value)}
          id="city"
          label="City"
          margin="normal"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          value={postalCode}
          onChange={e => updatePostalCode(e.target.value)}
          id="postalCode"
          label="Postal Code"
          margin="normal"
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

Address.propTypes = {
  streetAddress: PropTypes.string.isRequired,
  streetAddressCont: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  updateStreetAddress: PropTypes.func.isRequired,
  updateStreetAddressCont: PropTypes.func.isRequired,
  updateCity: PropTypes.func.isRequired,
  updateState: PropTypes.func.isRequired,
  updatePostalCode: PropTypes.func.isRequired,
  country: PropTypes.string.isRequired,
  updateCountry: PropTypes.func.isRequired
};

export default Address;
