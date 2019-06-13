import React from 'react';
import { withRouter } from 'react-router-dom';

import PATHS from '@constants/paths';
import NavMenu from '@shared/NavMenu';
import Back from '@shared/Back';
import Container from '@shared/Container';

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
