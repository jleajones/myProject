import React from 'react';
import styled from 'styled-components';
import { camelCase } from '@clientLib/utils';

import PATHS from '@constants/paths';
import Link from '@shared/Link';

import items from './constants';
import lang from './language';

const NavMenu = () => (
  <nav>
    <NavList>
      {items.map(item => (
        <NavItem key={item}>
          <Link
            to={PATHS[camelCase(item)].path}
            category="header"
            label={item.replace(/\s+/g, '-')}
            color="primary"
          >
            {lang[camelCase(item)]()}
          </Link>
        </NavItem>
      ))}
    </NavList>
  </nav>
);

const NavList = styled.ul`
  margin: 0;
`;

const NavItem = styled.li`
  color: ${props => props.theme.colors.primary};
`;

export default NavMenu;
