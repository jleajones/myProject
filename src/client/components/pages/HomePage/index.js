import { connect } from 'react-redux';
import Component from './component';

import { getJobs } from '@store/jobs/thunk';

const mapStateToProps = state => {
  const { jobs } = state;
  return {
    jobs
  };
};

const mapDispatchToProps = {
  getJobs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
