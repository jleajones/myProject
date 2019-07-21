import React from 'react';

import { getDisplayName } from '@clientLib/utils';

/**
 *
 * @param WrappedComponent
 * @returns {function(*): *}
 */
const withTimer = WrappedComponent => {
  const displayName = `WithTimer(${getDisplayName(WrappedComponent)})`;
  let WithTimer = props => {
    return <WrappedComponent {...props} />;
  };

  WithTimer.displayName = displayName;
  return WithTimer;
};

export default withTimer;
