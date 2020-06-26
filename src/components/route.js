import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProfilePage from './pages/ProfilePage';
import Dashbord from './pages/Dashboard';
import All from './pages/All';


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        
        <Route path='/dashbord' component={Dashbord} />
        
        <Route path='/profile' component={ProfilePage} />
      
        <Route path='/all' component={All} />
        
      </Switch>
    );
  }
}

export default Routes;
