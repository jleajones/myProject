import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Page = ({ pageName, children, style, dispatchPageview }) => {
  useEffect(() => {
    dispatchPageview({
      pageName,
      uuid: 'COME_FROM_COOKIE',
      properties: {
        referrer: document.referrer,
        url: window.location.href,
        screenX: window.innerWidth,
        screenY: window.innerHeight,
        userAgent: window.navigator.userAgent,
        languages: window.navigator.languages
      }
    });
  }, [pageName]);
  return <main style={style}>{children}</main>;
};

Page.defaultProps = {
  style: {}
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  pageName: PropTypes.string.isRequired,
  style: PropTypes.shape(),
  dispatchPageview: PropTypes.func.isRequired
};

export default Page;
