import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link as OriginalLink } from 'react-router-dom';
import MUILink from '@material-ui/core/Link';

const EVENT_NAME = `Click`;

const Link = ({
  category,
  children,
  color,
  dispatchInteraction,
  history,
  label,
  onClick,
  to,
  uuid
}) => {
  const onClickFn = e => {
    e.preventDefault();
    dispatchInteraction({
      eventName: EVENT_NAME,
      label: `${label}-link`,
      category,
      url: window.location.href,
      uuid,
      properties: {}
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
  onClick: () => {},
  color: 'primary'
};

Link.propTypes = {
  label: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
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
  color: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  category: PropTypes.string,
  onClick: PropTypes.func,
  dispatchInteraction: PropTypes.func.isRequired
};

export default withRouter(Link);
