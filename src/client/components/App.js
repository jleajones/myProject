import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from '@components/Routes';

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
      <Routes />
    </>
  );
};

export default App;
