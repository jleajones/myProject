import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link as RouterLink } from 'react-router-dom';
import MUILink from '@material-ui/core/Link';

const EVENT_NAME = `Click`;

/**
 *
 * @param category
 * @param children
 * @param color
 * @param dispatchInteraction
 * @param history
 * @param label
 * @param onClick
 * @param to
 * @param uuid
 * @param className
 * @param component
 * @returns {*}
 * @constructor
 */
const Link = ({
  category,
  children,
  color,
  dispatchInteraction,
  history,
  label,
  onClick,
  to,
  uuid,
  className,
  component
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
    <RouterLink onClick={onClickFn} to={to}>
      <MUILink color={color} className={className} component={component}>
        {children}
      </MUILink>
    </RouterLink>
  );
};

Link.defaultProps = {
  category: '',
  className: '',
  onClick: () => {},
  color: 'inherit',
  component: 'span'
};

Link.propTypes = {
  label: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
  className: PropTypes.string,
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
  component: PropTypes.string,
  onClick: PropTypes.func,
  dispatchInteraction: PropTypes.func.isRequired
};

export default withRouter(Link);
