import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const ContactInfo = ({
  phoneNumber,
  updatePhoneNumber,
  cellPhone,
  updateCellPhone,
  email,
  updateEmail,
  preferredContactMethod,
  updatePreferredContactMethod,
  preferredContactTime,
  updatePreferredContactTime,
  emailConfirmation,
  updateEmailConfirmation
}) => {
  return (
    <Grid container spacing={16}>
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

export default ContactInfo;
