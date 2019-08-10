import React, { useEffect } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Routes from '@components/Routes';
import Header from '@shared/Header';
import Footer from '@shared/Footer';
import PropTypes from 'prop-types';

/**
 *
 * @param dispatchIdentity
 * @returns {*}
 * @constructor
 */
const App = ({ dispatchIdentity }) => {
  useEffect(() => {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }

    dispatchIdentity();
  }, []);

  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth={false}>
        <Routes />
      </Container>
      <Footer />
    </>
  );
};

App.propTypes = {
  dispatchIdentity: PropTypes.func.isRequired
};

export default App;
