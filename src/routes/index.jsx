import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Customer from '~/pages/Customer';
import CreateCustomer from '~/pages/CreateCustomer';
import NotFound from '../pages/404';
import UpdateCustomer from '../pages/UpdateCustomer';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Customer} />
      <Route path="/new" component={CreateCustomer} />
      <Route path="/update" component={UpdateCustomer} />

      <Route path="/" component={() => <NotFound />} />
    </Switch>
  );
}
