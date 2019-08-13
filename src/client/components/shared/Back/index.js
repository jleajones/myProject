import React from 'react';

import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Link from '@shared/Link';
import PATHS from '@constants/paths';

import lang from './language';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& a': {
      textDecoration: 'none',
      '& :hover': {
        textDecoration: 'none',
        color: '#ffffff'
      }
    }
  },
  link: {
    color: '#cccccc',
    textTransform: 'capitalize'
  }
});

/**
 *
 * @returns {*}
 * @constructor
 */
const Back = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h6">
        <Link
          to={{ pathname: PATHS.home.path }}
          label="back"
          category="header"
          className={classes.link}
        >
          {lang.back()}
        </Link>
      </Typography>
    </div>
  );
};

// const BackContainer = styled.div`
//   padding-top: 24px;
// `;
//
// const WhiteText = styled.span`
//   color: ${props => props.theme.colors.light};
// `;
//
// const InnerText = styled.span`
//   display: inline-block;
//   vertical-align: text-bottom;
// `;

export default Back;
