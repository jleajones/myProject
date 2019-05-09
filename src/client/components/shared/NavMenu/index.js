import React from 'react';
import styled from 'styled-components';
import { camelCase } from '@clientLib/utils';

import Link from '@components/Link';
import PATHS from '@constants/paths';

import { items } from './constants';
import lang from './language';
import styles from './stylesheet.css';


const NavMenu = () => (
  <nav className={styles.navContainer}>
    <ul>
      {items.map(item => (
        <NavItem key={item}>
          <Link
            to={PATHS[camelCase(item)].path}
            category={'Header'}
            label={item}
          >
            {lang[camelCase(item)]()}
          </Link>
        </NavItem>
      ))}
    </ul>
  </nav>
);

const NavItem = styled.li`
  color: ${props => props.theme.colors.primary}
`;

export default NavMenu;
