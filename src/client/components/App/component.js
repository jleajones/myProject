import React, { useEffect } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import Routes from '@components/Routes';
import Header from '@shared/Header';
import Footer from '@shared/Footer';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';

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

    dispatchIdentity({
      url: window.location.href
    });
  }, []);

  return (
    <>
      <CssBaseline />
      <Header />
      <Toolbar />
      <Routes />
      <Footer />
    </>
  );
};

App.propTypes = {
  dispatchIdentity: PropTypes.func.isRequired
};

export default App;
