import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { frontloadConnect } from 'react-frontload';

const frontload = async ({ fetchData }) => {
  if (fetchData) {
    await fetchData();
  }
};

/**
 *
 * @param pageName
 * @param uuid
 * @param children
 * @param style
 * @param dispatchPageview
 * @returns {*}
 * @constructor
 */
const Page = ({ pageName, uuid, children, dispatchPageview }) => {
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
  return <main>{children}</main>;
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  pageName: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
  dispatchPageview: PropTypes.func.isRequired
};

export default frontloadConnect(frontload)(Page);
