import React from 'react';

import { getDisplayName } from '@clientLib/utils';

const withTimer = WrappedComponent => {
  const displayName = `WithTimer(${getDisplayName(WrappedComponent)})`;
  let WithTimer = (props) => {
    return <WrappedComponent {...props} />
  };

  WithTimer.displayName = displayName;
  return WithTimer;
}

export default withTimer;