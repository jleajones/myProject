import { connect } from 'react-redux';
import Component from './component';

import { getCareers } from '@store/careers/thunk';

const mapStateToProps = state => {
  const { careers } = state;
  return {
    careers
  };
};

const mapDispatchToProps = {
  getCareers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
