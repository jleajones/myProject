import React from 'react';
import { camelCase } from '@clientLib/utils';

import PATHS from '@constants/paths';
import Link from '@shared/Link';

import items from './constants';
import lang from './language';

/**
 *
 * @returns {*}
 * @constructor
 */
const NavMenu = () => (
  <nav>
    <ul>
      {items.map(item => (
        <li key={item}>
          <Link
            to={PATHS[camelCase(item)].path}
            category="header"
            label={item.replace(/\s+/g, '-')}
            color="primary"
          >
            {lang[camelCase(item)]()}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

// const NavList = styled.ul`
//   margin: 0;
// `;
//
// const NavItem = styled.li`
//   color: ${props => props.theme.colors.primary};
// `;

export default NavMenu;
