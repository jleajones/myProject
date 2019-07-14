import { connect } from 'react-redux';
import { dispatchIdentity } from '@store/analytics/thunk';

import Component from './component';

const mapStateToProps = state => {
  const { analytics } = state;
  return {
    analytics
  };
};

const mapDispatchToProps = {
  dispatchIdentity
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
