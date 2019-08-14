import { connect } from 'react-redux';
import { dispatchInteraction } from '@store/analytics/thunk';

import Component from './component';

/**
 *
 * @param state
 * @returns {{uuid: *}}
 */
const mapStateToProps = state => {
  const { analytics } = state;
  return {
    uuid: analytics.uuid
  };
};

const mapDispatchToProps = {
  dispatchInteraction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
