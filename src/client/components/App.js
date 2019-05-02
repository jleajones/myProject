import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from '@components/Header';
import Footer from '@components/Footer';
import Routes from "@client/components/Routes";

const App = () => {
  useEffect(() => {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <div>
      <CssBaseline />
      <Header />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
