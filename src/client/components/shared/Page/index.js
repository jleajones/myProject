import { connect } from 'react-redux';
import { dispatchPageview } from '@store/analytics/thunk';

import Component from './component';

const mapStateToProps = state => {
  const { analytics } = state;
  return {
    uuid: analytics.uuid
  };
};

const mapDispatchToProps = {
  dispatchPageview
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
