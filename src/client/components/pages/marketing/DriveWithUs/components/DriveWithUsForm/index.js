import React, { useState } from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import NoSsr from '@material-ui/core/NoSsr';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Fade from '@material-ui/core/Fade';

import Link from '@shared/Link';
import PersonalInfo from './PersonalInfo';
import Address from './Address';
import ContactInfo from './ContactInfo';
import LicenseOverview from './LicenseOverview';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
  }
}));

/**
 *
 * @returns {*}
 * @constructor
 */
const DriveWithUsForm = () => {
  const [firstName, updateFirstName] = useState('');
  const [lastName, updateLastName] = useState('');
  const [ssn, updateSSN] = useState('');
  const [dob, updateDOB] = useState('');

  const [streetAddress, updateStreetAddress] = useState('');
  const [streetAddressCont, updateStreetAddressCont] = useState('');
  const [city, updateCity] = useState('');
  const [state, updateState] = useState('');
  const [country, updateCountry] = useState('');
  const [postalCode, updatePostalCode] = useState('');

  const [phoneNumber, updatePhoneNumber] = useState('');
  const [cellPhone, updateCellPhone] = useState('');
  const [email, updateEmail] = useState('');
  const [emailConfirmation, updateEmailConfirmation] = useState('');
  const [preferredContactMethod, updatePreferredContactMethod] = useState('');
  const [preferredContactTime, updatePreferredContactTime] = useState('');

  const [licenseNumber, updateLicenseNumber] = useState('');
  const [licenseCountry, updateLicenseCountry] = useState('');
  const [licenseState, updateLicenseState] = useState('');
  const [licenseExpiration, updateLicenseExpiration] = useState('');
  const [physicalExpiration, updatePhysicalExpiration] = useState('');
  const [endorsements, updateEndorsements] = useState('');

  const [termsConsent, updateTermsConsent] = useState(false);
  const classes = useStyles();

  const handleOnSubmit = e => {
    console.log(e);
  };
  const handleOnBlur = e => {
    console.log(e);
  };

  return (
    <Fade in timeout={{ enter: 400 }}>
      <Grid container justify="center">
        <Grid item xs={12} sm={10} md={8}>
          <Paper square className={classes.paper}>
            <Grid container justify="center">
              <Grid item xs={10}>
                <Typography
                  variant="h6"
                  align="center"
                  color="textSecondary"
                  gutterBottom
                >
                  <em>LJ&amp;G Freight</em> is looking for solo owner-operators
                  and teams with refrigerated experience. Fill out the form and
                  start driving your own success.
                </Typography>
                <Divider light />
                <form onSubmit={handleOnSubmit}>
                  <section>
                    <PersonalInfo
                      onBlur={handleOnBlur}
                      firstName={firstName}
                      lastName={lastName}
                      ssn={ssn}
                      dob={dob}
                      updateFirstName={updateFirstName}
                      updateLastName={updateLastName}
                      updateSSN={updateSSN}
                      updateDOB={updateDOB}
                    />
                  </section>
                  <section>
                    <Address
                      onBlur={handleOnBlur}
                      streetAddress={streetAddress}
                      streetAddressCont={streetAddressCont}
                      country={country}
                      updateCountry={updateCountry}
                      city={city}
                      state={state}
                      postalCode={postalCode}
                      updateStreetAddress={updateStreetAddress}
                      updateStreetAddressCont={updateStreetAddressCont}
                      updateCity={updateCity}
                      updateState={updateState}
                      updatePostalCode={updatePostalCode}
                    />
                  </section>
                  <section>
                    <ContactInfo
                      onBlur={handleOnBlur}
                      phoneNumber={phoneNumber}
                      cellPhone={cellPhone}
                      email={email}
                      preferredContactMethod={preferredContactMethod}
                      preferredContactTime={preferredContactTime}
                      updatePhoneNumber={updatePhoneNumber}
                      updateCellPhone={updateCellPhone}
                      updateEmail={updateEmail}
                      updatePreferredContactMethod={
                        updatePreferredContactMethod
                      }
                      updatePreferredContactTime={updatePreferredContactTime}
                      emailConfirmation={emailConfirmation}
                      updateEmailConfirmation={updateEmailConfirmation}
                    />
                  </section>
                  <section>
                    <LicenseOverview
                      licenseNumber={licenseNumber}
                      updateLicenseNumber={updateLicenseNumber}
                      licenseCountry={licenseCountry}
                      updateLicenseCountry={updateLicenseCountry}
                      licenseState={licenseState}
                      updateLicenseState={updateLicenseState}
                      licenseExpiration={licenseExpiration}
                      updateLicenseExpiration={updateLicenseExpiration}
                      physicalExpiration={physicalExpiration}
                      updatePhysicalExpiration={updatePhysicalExpiration}
                      endorsements={endorsements}
                      updateEndorsements={updateEndorsements}
                    />
                  </section>
                  <NoSsr>
                    <section>
                      <Grid container>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={termsConsent}
                              onChange={() => updateTermsConsent(!termsConsent)}
                              value="consent"
                              color="primary"
                            />
                          }
                          label={
                            <Typography>
                              I agree to the use and disclosure of my
                              information as described in{' '}
                              <Link to="/privacy-policy" label="privacy-policy">
                                LJ&amp;G Freight&apos;s privacy policy
                              </Link>
                              .
                            </Typography>
                          }
                        />
                      </Grid>
                    </section>
                  </NoSsr>
                  <Grid container justify="flex-end">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleOnSubmit}
                    >
                      Submit
                    </Button>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Fade>
  );
};

export default DriveWithUsForm;
