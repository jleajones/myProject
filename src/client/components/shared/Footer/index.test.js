import React from 'react';
import { shallow } from 'enzyme';
import Footer from '.';

describe('<Footer />', () => {
  test('Renders component without crashing', () => {
    const component = shallow(<Footer />);

    expect(component).toMatchSnapshot();
  });
});
