import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { frontloadConnect } from 'react-frontload';
import makeStyles from '@material-ui/core/styles/makeStyles';

const frontload = async ({ fetchData }) => {
  if (fetchData) {
    await fetchData();
  }
};

const useStyles = makeStyles({
  root: {
    padding: '30px 0'
  }
});

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
  const classes = useStyles();
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
  return <main className={classes.root}>{children}</main>;
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  pageName: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
  dispatchPageview: PropTypes.func.isRequired
};

export default frontloadConnect(frontload)(Page);
