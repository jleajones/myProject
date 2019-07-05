import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link as OriginalLink } from 'react-router-dom';
import MUILink from '@material-ui/core/Link';

import { trackEvent } from '@client/lib/tracking';

const EVENT_NAME = `LinkClick`;

const Link = ({ children, label, category, onClick, to, history, color }) => {
  const onClickFn = e => {
    e.preventDefault();
    trackEvent(EVENT_NAME, {
      label,
      category
    });

    if (onClick) onClick(e);
    history.push(to);
  };

  return (
    <OriginalLink onClick={onClickFn} to={to}>
      <MUILink color={color} component="span">
        {children}
      </MUILink>
    </OriginalLink>
  );
};

Link.defaultProps = {
  category: '',
  onClick: () => {}
};

Link.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
      hash: PropTypes.string,
      state: PropTypes.string
    })
  ]).isRequired,
  color: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  category: PropTypes.string,
  onClick: PropTypes.func
};

export default withRouter(Link);
