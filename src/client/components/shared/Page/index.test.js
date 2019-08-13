import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import Page from '.';

describe('<Page />', () => {
  const store = configureStore();
  const pageName = 'Test Page Name';
  const dispatchPageview = jest.fn();

  const initialState = {
    analytics: {
      uuid: 'aaa-adsf-def-ejh8d'
    }
  };

  test('Renders component without crashing', () => {
    const component = shallow(
      <Page
        store={store(initialState)}
        dispatchPageview={dispatchPageview}
        pageName={pageName}
      >
        <h1>some child</h1>
      </Page>
    );

    expect(component).toMatchSnapshot();
  });
});
