import React from 'react';
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
        <li key={item}>
          <Link
            to={PATHS[camelCase(item)].path}
            category={'Header'}
            label={item}
          >
            {lang[camelCase(item)]()}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavMenu;
