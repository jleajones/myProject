import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => <MyContainer>{children}</MyContainer>;

const MyContainer = styled.div`
  padding: 0 20px;

  @media (max-width: 600px) {
    padding: 0;
  }
`;

export default Container;
