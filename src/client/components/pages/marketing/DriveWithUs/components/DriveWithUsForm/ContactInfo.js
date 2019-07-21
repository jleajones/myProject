import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

/**
 *
 * @param phoneNumber
 * @param updatePhoneNumber
 * @param cellPhone
 * @param updateCellPhone
 * @param email
 * @param updateEmail
 * @param emailConfirmation
 * @param updateEmailConfirmation
 * @returns {*}
 * @constructor
 */
const ContactInfo = ({
  phoneNumber,
  updatePhoneNumber,
  cellPhone,
  updateCellPhone,
  email,
  updateEmail,
  // preferredContactMethod,
  // updatePreferredContactMethod,
  // preferredContactTime,
  // updatePreferredContactTime,
  emailConfirmation,
  updateEmailConfirmation
}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">
          <b>Contact Information</b>
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          value={phoneNumber}
          onChange={e => updatePhoneNumber(e.target.value)}
          id="phoneNumber"
          label="Phone Number"
          placeholder="555-555-5555"
          margin="normal"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          value={cellPhone}
          onChange={e => updateCellPhone(e.target.value)}
          id="cellPhone"
          label="Cell Phone Number"
          placeholder="555-555-5555"
          margin="normal"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          value={email}
          onChange={e => updateEmail(e.target.value)}
          id="email"
          label="Email Address"
          placeholder="youremail@yourdomain.com"
          margin="normal"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          value={emailConfirmation}
          onChange={e => updateEmailConfirmation(e.target.value)}
          id="emailConfirmation"
          label="Confirm your Email Address"
          placeholder="youremail@yourdomain.com"
          margin="normal"
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

ContactInfo.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
  updatePhoneNumber: PropTypes.func.isRequired,
  cellPhone: PropTypes.string.isRequired,
  updateCellPhone: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  updateEmail: PropTypes.func.isRequired,
  // preferredContactMethod: PropTypes.string.isRequired,
  // updatePreferredContactMethod: PropTypes.string.isRequired,
  // preferredContactTime: PropTypes.string.isRequired,
  // updatePreferredContactTime: PropTypes.string.isRequired,
  emailConfirmation: PropTypes.string.isRequired,
  updateEmailConfirmation: PropTypes.func.isRequired
};

export default ContactInfo;
