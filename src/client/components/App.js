import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from '@components/Routes';
import Header from '@shared/Header';
import Footer from '@shared/Footer';

const App = () => {
  useEffect(() => {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <CssBaseline />
      <Header />
      <Routes />
      <Footer />
    </>
  );
};

export default App;
