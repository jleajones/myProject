import { connect } from 'react-redux';
import { dispatchPageview } from '@store/analytics/thunk';
import { selectUuid } from '@store/analytics/selector';

import Component from './component';

const mapStateToProps = state => {
  return {
    uuid: selectUuid(state)
  };
};

const mapDispatchToProps = {
  dispatchPageview
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
