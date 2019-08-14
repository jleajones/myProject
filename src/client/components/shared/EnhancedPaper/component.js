import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import EVENT_NAMES from '@shared/constants';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    borderLeft: 'solid 4px',
    transition: 'border-width 0.2s ease-out',
    '&:hover': {
      borderWidth: '24px'
    }
  }
}));

const EnhancedPaper = ({
  children,
  onClick,
  dispatchInteraction,
  uuid,
  label,
  category,
  classFromParent
}) => {
  const classes = useStyles();
  const [elevation, setElevation] = useState(1);
  const onMouseEnter = () => setElevation(5);
  const onMouseLeave = () => setElevation(1);
  const onClickHandler = e => {
    dispatchInteraction({
      eventName: EVENT_NAMES.CLICK,
      label: `paper-${label}`,
      category,
      url: window.location.href,
      uuid,
      properties: {}
    });
    onClick(e);
  };

  return (
    <Paper
      className={`${classes.paper} ${classFromParent.child}`}
      elevation={elevation}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClickHandler}
    >
      {children}
    </Paper>
  );
};

EnhancedPaper.defaultProps = {
  onClick: () => console.log('in the default click event'),
  category: '',
  classFromParent: {}
};

EnhancedPaper.propTypes = {
  label: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
  category: PropTypes.string,
  children: PropTypes.node.isRequired,
  dispatchInteraction: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  classFromParent: PropTypes.shape()
};

export default EnhancedPaper;
