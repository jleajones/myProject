import React from 'react';
import { Route, Switch, Redirect as Original } from 'react-router-dom';

const Redirect = ({ from = [], to }) => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) {
        staticContext.statusCode = 302;
      }

      return Array.isArray(from) ? (
        <Switch>
          {from.map(cf => (
            <Original key={cf} from={cf} to={to} />
          ))}
        </Switch>
      ) : (
        <Original key={from} from={from} to={to} />
      );
    }}
  />
);
export default Redirect;
