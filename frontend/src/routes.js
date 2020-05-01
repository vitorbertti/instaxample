import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import App from './App';

export default function Routes() {
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/timeline/:id" component={App} />
         </Switch>
      </BrowserRouter>
   );
}
