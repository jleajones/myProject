import React from 'react';
import { shallow } from 'enzyme';
import PATHS from '@constants/paths';

import Header from '.';

describe('<Header />', () => {
  test('Renders component without crashing', () => {
    const component = shallow(
      <Header location={{ pathname: PATHS.home.path }} />
    );

    expect(component).toMatchSnapshot();
  });
  test('Renders component without crashing', () => {
    const component = shallow(
      <Header location={{ pathname: PATHS.driveWithUs.path }} />
    );

    expect(component).toMatchSnapshot();
  });
});
