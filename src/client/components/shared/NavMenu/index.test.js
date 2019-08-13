import React from 'react';
import { shallow } from 'enzyme';

import NavMenu from '.';

describe('<NavMenu />', () => {
  test('Renders component without crashing', () => {
    const component = shallow(<NavMenu />);

    expect(component).toMatchSnapshot();
  });
});
