import React from 'react';
import { withRouter } from 'react-router-dom';
import NavMenu from '@components/NavMenu';
import Back from '@components/Back';

import PATHS from '@constants/paths';
import Container from '@components/Container';

const Header = ({ location }) => {
  const NavComponent =
    location.pathname === PATHS.driveWithUs.path ? Back : NavMenu;
  return (
    <header>
      <Container>
        <NavComponent />
      </Container>
    </header>
  );
};

export default withRouter(Header);
