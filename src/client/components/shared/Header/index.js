import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import PromoBar from './components/PromoBar';
import NavBar from './components/NavBar';

const PROMO_BAR_HEIGHT = '50px';

/**
 *
 * @param location
 * @returns {*}
 * @constructor
 */
const Header = ({ location }) => {
  return (
    <>
      <PromoBar height={PROMO_BAR_HEIGHT} />
      <NavBar location={location} offset={PROMO_BAR_HEIGHT} />
    </>
  );
};

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(Header);
