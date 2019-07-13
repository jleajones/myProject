import { connect } from 'react-redux';
import getCareers from '@store/careers/thunk';
import { getUsers } from '@store/users/thunk';
import Component from './component';

const mapStateToProps = state => {
  const { careers, users } = state;
  return {
    careers: careers.list,
    users: users.list
  };
};

const mapDispatchToProps = {
  getCareers,
  getUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
