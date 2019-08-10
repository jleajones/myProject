import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const Container = ({ children }) => <div>{children}</div>;

Container.propTypes = {
  children: PropTypes.node.isRequired
};

// const MyContainer = styled.div`
//   padding: 0 20px;
//
//   @media (max-width: 600px) {
//     padding: 0;
//   }
// `;

export default Container;
