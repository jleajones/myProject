import React from 'react';
import PropTypes from 'prop-types';
import { pageView } from '@client/lib/tracking';

const Page = ({ name, children }) => {
  pageView(name, {});
  return <div>{children}</div>;
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired
};

export default Page;
