import { connect } from 'react-redux';
// import getCareers from '@store/careers/thunk';
import { getUsers } from '@store/users/thunk';
import Component from './component';

/**
 *
 * @param state
 * @returns {{careers: *, users: *}}
 */
const mapStateToProps = state => {
  const { careers, users } = state;
  return {
    careers: careers.list,
    users: users.list
  };
};

const mapDispatchToProps = {
  getUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
