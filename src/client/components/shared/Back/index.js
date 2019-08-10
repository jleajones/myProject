import React from 'react';

import Typography from '@material-ui/core/Typography';
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';

import Link from '@shared/Link';
import PATHS from '@constants/paths';

import lang from './language';

/**
 *
 * @returns {*}
 * @constructor
 */
const Back = () => (
  <div>
    <Typography variant="h6">
      <Link
        to={{ pathname: PATHS.home.path }}
        label="back"
        category="top-nav"
        color="primary"
      >
        <span>
          <KeyboardBackspace />
          <span>{lang.back()}</span>
        </span>
      </Link>
    </Typography>
  </div>
);

// const BackContainer = styled.div`
//   padding-top: 24px;
// `;
//
// const WhiteText = styled.span`
//   color: ${props => props.theme.colors.light};
// `;
//
// const InnerText = styled.span`
//   display: inline-block;
//   vertical-align: text-bottom;
// `;

export default Back;
