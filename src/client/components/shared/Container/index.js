import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = ({ children }) => <MyContainer>{children}</MyContainer>;

Container.propTypes = {
  children: PropTypes.node.isRequired
};

const MyContainer = styled.div`
  padding: 0 20px;

  @media (max-width: 600px) {
    padding: 0;
  }
`;

export default Container;
