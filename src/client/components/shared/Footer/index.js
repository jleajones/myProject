import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@components/Container';

import styles from './stylesheet.css';

const Footer = () => (
  <footer className={styles.footer}>
    <Container>
      <Typography>All Rights Reserved. Copyright &copy; 2019</Typography>
    </Container>
  </footer>
);

export default Footer;
