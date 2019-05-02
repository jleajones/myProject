import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import { Typography } from '@material-ui/core';

import Link from '@components/Link';
import PersonalInfo from '@components/DriveWithUsForm/PersonalInfo';
import Address from '@components/DriveWithUsForm/Address';
import ContactInfo from '@components/DriveWithUsForm/ContactInfo';
import LicenseOverview from '@components/DriveWithUsForm/LicenseOverview';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import styles from './stylesheet.css';

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

  const [termsConsent, updateTermsConsent] = useState('');

  const handleOnSubmit = e => {
    console.log(e);
  };
  const handleOnBlur = e => {
    console.log(e);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <section className={styles.formSection}>
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
      <section className={styles.formSection}>
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
      <section className={styles.formSection}>
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
          updatePreferredContactMethod={updatePreferredContactMethod}
          updatePreferredContactTime={updatePreferredContactTime}
          emailConfirmation={emailConfirmation}
          updateEmailConfirmation={updateEmailConfirmation}
        />
      </section>
      <section className={styles.formSection}>
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
      <section className={styles.formSection}>
        <Grid container>
          <FormControlLabel
            control={
              <Checkbox
                checked={termsConsent}
                onChange={e => updateTermsConsent(!termsConsent)}
                value="consent"
                color="primary"
              />
            }
            label={
              <Typography classes={{ body1: styles.consentText }}>
                I agree to the use and disclosure of my information as described
                in{' '}
                <Link to="/privacy-policy" label="privacy-policy">
                  LJ&amp;G Freight's privacy policy
                </Link>
                .
              </Typography>
            }
          />
        </Grid>
      </section>
      <Grid container justify="flex-end">
        <Button variant="contained" color={'primary'} onClick={handleOnSubmit}>
          Submit
        </Button>
      </Grid>
    </form>
  );
};

export default DriveWithUsForm;
