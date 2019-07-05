import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { USStatesForSelect } from '@constants/states';
import PropTypes from 'prop-types';

const LicenseOverview = ({
  licenseNumber,
  updateLicenseNumber,
  licenseCountry,
  updateLicenseCountry,
  licenseState,
  updateLicenseState,
  licenseExpiration,
  updateLicenseExpiration
  // physicalExpiration,
  // endorsements,
  // updateEndorsements
}) => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Typography variant="h6">
        <b>License Overview</b>
      </Typography>
    </Grid>
    <Grid item xs={12} md={8}>
      <TextField
        value={licenseNumber}
        onChange={e => updateLicenseNumber(e.target.value)}
        id="licenseNumber"
        label="License Number"
        margin="normal"
        fullWidth
      />
    </Grid>
    <Grid item xs={12} md={4}>
      <TextField
        value={licenseExpiration}
        id="licenseExpiration"
        label="License Expiration Date"
        margin="normal"
        fullWidth
        type="date"
        InputLabelProps={{
          shrink: true
        }}
        onChange={e => updateLicenseExpiration(e.target.value)}
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <TextField
        select
        value={licenseCountry}
        onChange={e => updateLicenseCountry(e.target.value)}
        id="licenseCountry"
        label="License Country"
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
        value={licenseState}
        onChange={e => updateLicenseState(e.target.value)}
        id="licenseState"
        label="License State/Province"
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
  </Grid>
);

LicenseOverview.propTypes = {
  licenseNumber: PropTypes.string.isRequired,
  updateLicenseNumber: PropTypes.func.isRequired,
  licenseCountry: PropTypes.string.isRequired,
  updateLicenseCountry: PropTypes.func.isRequired,
  licenseState: PropTypes.string.isRequired,
  updateLicenseState: PropTypes.func.isRequired,
  licenseExpiration: PropTypes.string.isRequired,
  updateLicenseExpiration: PropTypes.func.isRequired
  // physicalExpiration: PropTypes.string.isRequired,
  // endorsements: PropTypes.string.isRequired,
  // updateEndorsements: PropTypes.func.isRequired
};

export default LicenseOverview;
