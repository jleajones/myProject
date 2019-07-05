import React from 'react';
import PropTypes from 'prop-types';
import { pageView } from '@client/lib/tracking';

const Page = ({ name, children, style }) => {
  pageView(name, {});
  return <main style={style}>{children}</main>;
};

Page.defaultProps = {
  style: {}
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  style: PropTypes.shape()
};

export default Page;
