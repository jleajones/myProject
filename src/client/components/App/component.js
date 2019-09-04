import React, { useEffect } from 'react';
import { Frontload } from 'react-frontload';

import CssBaseline from '@material-ui/core/CssBaseline';

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

    dispatchIdentity({
      url: window.location.href
    });
  }, []);

  return (
    <Frontload>
      <>
        <CssBaseline />
        <Header />
        <Routes />
        <Footer />
      </>
    </Frontload>
  );
};

App.propTypes = {
  dispatchIdentity: PropTypes.func.isRequired
};

export default App;
