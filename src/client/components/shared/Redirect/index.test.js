import React from 'react';
import { shallow } from 'enzyme';

import Redirect from '.';

describe('<Redirect />', () => {
  test('Renders component without crashing', () => {
    const component = shallow(
      <Redirect from={['/new-home-page', '/home-page-2']} to="/" />
    );

    expect(component).toMatchSnapshot();
  });
});
