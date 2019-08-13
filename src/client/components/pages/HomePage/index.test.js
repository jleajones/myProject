import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import HomePage from '.';

describe('<HomePage />', () => {
  const getUsers = jest.fn();
  const store = configureStore();
  const initialState = {
    users: {
      data: [
        {
          id: 1,
          username: 'HarveyD',
          email: 'harvey@email.com',
          joined: '2019-07-07T04:45:04.524Z',
          last_logged_in: '2019-07-07T04:45:04.524Z'
        },
        {
          id: 3,
          username: 'jleajones',
          email: 'jleajones@email.com',
          joined: '2019-08-12T19:24:21.942Z',
          last_logged_in: '2019-08-12T19:24:21.942Z'
        },
        {
          id: 4,
          username: 'darmstr2',
          email: 'darmstr2@email.com',
          joined: '2019-08-12T19:24:39.744Z',
          last_logged_in: '2019-08-12T19:24:39.744Z'
        }
      ]
    }
  };
  test('Renders component without crashing', () => {
    const component = shallow(
      <HomePage getUsers={getUsers} store={store(initialState)} />
    );

    expect(component).toMatchSnapshot();
  });
});
