import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import { Typography } from '@material-ui/core';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PropTypes from 'prop-types';

/**
 *
 * @param firstName
 * @param updateFirstName
 * @param lastName
 * @param updateLastName
 * @param ssn
 * @param updateSSN
 * @param dob
 * @param updateDOB
 * @returns {*}
 * @constructor
 */
const PersonalInfo = ({
  firstName,
  updateFirstName,
  lastName,
  updateLastName,
  ssn,
  updateSSN,
  dob,
  updateDOB
}) => {
  const [ssnVisibility, updateSSNVisibility] = useState(false);

  const handleClickShowSSN = () => {
    updateSSNVisibility(!ssnVisibility);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">
          <b>Personal Information</b>
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          value={firstName}
          onChange={e => updateFirstName(e.target.value)}
          id="first-name"
          label="First Name"
          placeholder="Jane"
          margin="normal"
          fullWidth
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          value={lastName}
          onChange={e => updateLastName(e.target.value)}
          id="last-name"
          label="Last Name"
          placeholder="Doe-Williams"
          margin="normal"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          value={ssn}
          id="ssn"
          type={ssnVisibility ? 'text' : 'password'}
          label="Social Security"
          margin="normal"
          placeholder="555-55-5555"
          fullWidth
          onChange={e => updateSSN(e.target.value)}
          InputProps={{
            endAdornment: (
              <div
                tabIndex={0}
                onKeyPress={() => {}}
                aria-label="Toggle social security visibility"
                onClick={handleClickShowSSN}
                role="button"
              >
                {ssnVisibility ? <Visibility /> : <VisibilityOff />}
              </div>
            )
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          value={dob}
          id="dob"
          label="Date of birth"
          margin="normal"
          fullWidth
          type="date"
          InputLabelProps={{
            shrink: true
          }}
          onChange={e => updateDOB(e.target.value)}
        />
      </Grid>
    </Grid>
  );
};

PersonalInfo.propTypes = {
  firstName: PropTypes.string.isRequired,
  updateFirstName: PropTypes.func.isRequired,
  lastName: PropTypes.string.isRequired,
  updateLastName: PropTypes.func.isRequired,
  ssn: PropTypes.string.isRequired,
  updateSSN: PropTypes.func.isRequired,
  dob: PropTypes.string.isRequired,
  updateDOB: PropTypes.func.isRequired
};

export default PersonalInfo;
