import React from 'react';
import { shallow } from 'enzyme';
import Loader from '.';

describe('<Loader />', () => {
  test('Renders component without crashing', () => {
    const component = shallow(<Loader />);

    expect(component).toMatchSnapshot();
  });
});
