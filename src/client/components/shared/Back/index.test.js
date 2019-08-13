import React from 'react';
import { shallow } from 'enzyme';
import Back from '.';

describe('<Back />', () => {
  test('Renders component without crashing', () => {
    const component = shallow(<Back />);

    expect(component).toMatchSnapshot();
  });
});
