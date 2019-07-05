import React from 'react';
import { Route, Switch, Redirect as Original } from 'react-router-dom';
import PropTypes from 'prop-types';

const Redirect = ({ from, to }) => (
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

Redirect.propTypes = {
  to: PropTypes.string.isRequired,
  from: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Redirect;
