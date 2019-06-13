import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'

import Container from '@shared/Container';

const Footer = () => (
  <FooterWrapper>
    <Container>
      <Typography>All Rights Reserved. Copyright &copy; 2019</Typography>
    </Container>
  </FooterWrapper>
);

const FooterWrapper = styled.footer`
  padding: 12px 0;
`;
export default Footer;
