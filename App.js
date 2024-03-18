import React, { Fragment, useEffect } from 'react';
import AppNavigation from './src/routes/AppNavigation';
import { StatusBar } from 'react-native';

const App = () => {
  useEffect(() => {
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);
  return (
    <Fragment>
      <AppNavigation />
    </Fragment>
  );
};

export default App;