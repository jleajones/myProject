import React from 'react';
import Link from '@components/Link';
import PATHS from '@constants/paths';

import lang from './language';
import { items } from './constants';
import { camelCase } from '@clientLib/utils';

const Header = () => (
  <header>
    LOGO
    <nav>
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
  </header>
);

export default Header;
