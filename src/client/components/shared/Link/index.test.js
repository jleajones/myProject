import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import Link from '.';

describe('<Link />', () => {
  let dispatchInteraction;
  let history;
  let label;
  let uuid;
  let category;
  let to;
  let store;
  let initialState;

  beforeEach(() => {
    dispatchInteraction = jest.fn();
    history = {};
    label = 'some label';
    uuid = 'aaaa-sss-asdfd-asdgsd';
    category = 'someCategory';
    to = '/some/url';
    store = configureStore();
    initialState = {
      analytics: {
        uuid
      }
    };
  });
  test('Renders component without crashing', () => {
    const component = shallow(
      <Link
        store={store(initialState)}
        dispatchInteraction={dispatchInteraction}
        history={history}
        label={label}
        category={category}
        to={to}
      >
        Some Text
      </Link>
    );

    expect(component).toMatchSnapshot();
  });
});
