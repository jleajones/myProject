import React from 'react';
import { Route, Switch, Redirect as Original } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 *
 * @param fromUrl
 * @param to
 * @returns {*}
 * @constructor
 */
const Redirect = ({ fromUrl, to }) => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) {
        staticContext.statusCode = 302;
      }

      return Array.isArray(fromUrl) ? (
        <Switch>
          {fromUrl.map(cf => (
            <Original key={cf} from={cf} to={to} />
          ))}
        </Switch>
      ) : (
        <Original key={fromUrl} from={fromUrl} to={to} />
      );
    }}
  />
);

Redirect.propTypes = {
  to: PropTypes.string.isRequired,
  fromUrl: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Redirect;
