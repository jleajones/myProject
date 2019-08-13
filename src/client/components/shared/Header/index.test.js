import React from 'react';
import { shallow } from 'enzyme';
import PATHS from '@constants/paths';

import Header from '.';

describe('<Header />', () => {
  test('Renders component without crashing', () => {
    const component = shallow(<Header location={PATHS.home.path} />);

    expect(component).toMatchSnapshot();
  });
});
