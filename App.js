import React from 'react';
import { Route,Redirect } from 'react-router';
import Sidebar from './Sidebar';

const App = () => {
  return (
    <Route>
      <Sidebar />
      <Redirect from="/" to="/counterapp" />
    </Route>
  );
}

export default App;
