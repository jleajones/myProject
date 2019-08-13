import { connect } from 'react-redux';
import { getUsers } from '@store/users/thunk';
import Component from './component';

/**
 *
 * @param state
 * @returns {{careers: *, users: *}}
 */
const mapStateToProps = state => {
  const { users } = state;
  return {
    users: users.data
  };
};

const mapDispatchToProps = {
  getUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
