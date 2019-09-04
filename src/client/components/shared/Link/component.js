import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link as RouterLink } from 'react-router-dom';

import makeStyles from '@material-ui/core/styles/makeStyles';
import MUILink from '@material-ui/core/Link';

import EVENT_NAMES from '@shared/constants';

const useStyles = makeStyles({
  root: {
    textDecoration: 'none'
  }
});

/**
 *
 * @param {string} category - Category for event tracking
 * @param {node|string} children - Clickable content
 * @param {string} color - text color
 * @param {function} dispatchInteraction - event tracking call
 * @param {object} history - react router history object
 * @param {string} label - label for event tracking
 * @param {function} onClick - callback fired on click
 * @param {(string|object)} to - next page
 * @param {string} uuid - unique user identifier
 * @param {string} className - css classname
 * @param {string} component - wrapping Html element
 * @param {string} underline - when to show underline ('none'|'underline'|'always')
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
  component,
  underline
}) => {
  const classes = useStyles();
  const onClickFn = e => {
    e.preventDefault();
    dispatchInteraction({
      eventName: EVENT_NAMES.CLICK,
      label: `${label}-link`,
      category,
      url: window.location.href,
      uuid,
      properties: {}
    });

    if (onClick) onClick(e);
    if (to) history.push(to);
  };

  return (
    <RouterLink onClick={onClickFn} to={to} className={classes.root}>
      <MUILink
        color={color}
        className={className}
        component={component}
        underline={underline}
      >
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
  component: 'span',
  to: {},
  underline: 'none'
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
  ]),
  color: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  category: PropTypes.string,
  underline: PropTypes.string,
  component: PropTypes.string,
  onClick: PropTypes.func,
  dispatchInteraction: PropTypes.func.isRequired
};

export default withRouter(Link);
