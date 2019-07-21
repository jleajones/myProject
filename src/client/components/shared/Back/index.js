import React from 'react';
import styled from 'styled-components';

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
  <BackContainer>
    <Typography variant="h6">
      <Link
        to={{ pathname: PATHS.home.path }}
        label="back"
        category="top-nav"
        color="primary"
      >
        <WhiteText>
          <KeyboardBackspace />
          <InnerText>{lang.back()}</InnerText>
        </WhiteText>
      </Link>
    </Typography>
  </BackContainer>
);

const BackContainer = styled.div`
  padding-top: 24px;
`;

const WhiteText = styled.span`
  color: ${props => props.theme.colors.light};
`;

const InnerText = styled.span`
  display: inline-block;
  vertical-align: text-bottom;
`;

export default Back;
