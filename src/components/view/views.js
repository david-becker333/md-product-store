import React from 'react';
import { Route, Link, Switch, IndexRoute } from 'react-router-dom';
import {
  ProductCatalog,
  ProductDetail
} from './product';
import { Dashboard } from './dashboard';

export function Views({ match }) {

  const { content } = match.params;

  return (
    <div>
      <Switch>
        <Route path="/ui/dashboard" exact component={Dashboard} />
        <Route path="/ui/catalog" exact component={ProductCatalog} />
        <Route path="/ui/detail" exact component={ProductDetail} />
      </Switch>
    </div>
  )
}
