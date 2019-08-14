import { connect } from 'react-redux';
import { fetchEvents } from '@store/analytics/thunk';
import Component from './component';

/**
 *
 * @param state
 * @returns {{events: *}}
 */
const mapStateToProps = state => {
  const { analytics } = state;
  return {
    events: analytics.events
  };
};

const mapDispatchToProps = {
  fetchEvents
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
