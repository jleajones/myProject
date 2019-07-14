import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Page = ({ pageName, uuid, children, style, dispatchPageview }) => {
  useEffect(() => {
    if (uuid) {
      dispatchPageview({
        pageName,
        uuid,
        url: window.location.href,
        properties: {
          referrer: document.referrer,
          screenX: window.innerWidth,
          screenY: window.innerHeight,
          userAgent: window.navigator.userAgent,
          languages: window.navigator.languages
        }
      });
    }
  }, [pageName, uuid]);
  return <main style={style}>{children}</main>;
};

Page.defaultProps = {
  style: {}
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  pageName: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
  style: PropTypes.shape(),
  dispatchPageview: PropTypes.func.isRequired
};

export default Page;
