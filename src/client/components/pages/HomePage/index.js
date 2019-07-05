import { connect } from 'react-redux';
import getCareers from '@store/careers/thunk';
import Component from './component';

const mapStateToProps = state => {
  const { careers } = state;
  return {
    careers: careers.list
  };
};

const mapDispatchToProps = {
  getCareers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
