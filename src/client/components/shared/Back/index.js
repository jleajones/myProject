import React from 'react';
import Typography from '@material-ui/core/Typography';
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';

import styles from './stylesheet.css';
import Link from '@components/Link';
import PATHS from '@constants/paths';

const Back = () => (
  <div className={styles.container}>
    <Typography variant="h6">
      <Link to={{ pathname: PATHS.home.path }} label={'back'} color={'primary'}>
        <KeyboardBackspace />
        <span className={styles.text}>Back</span>
      </Link>
    </Typography>
  </div>
);

export default Back;
