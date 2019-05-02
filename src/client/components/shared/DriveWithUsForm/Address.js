import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import { Typography } from '@material-ui/core';

import { USStatesForSelect } from '@constants/states';

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
    <Grid container spacing={16}>
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

export default Address;
