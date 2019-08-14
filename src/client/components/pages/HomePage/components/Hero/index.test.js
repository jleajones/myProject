import React from 'react';
import { shallow } from 'enzyme';
import Hero from '.';

describe('<Hero />', () => {
  test('Renders component without crashing', () => {
    const component = shallow(<Hero />);

    expect(component).toMatchSnapshot();
  });
});
