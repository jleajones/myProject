import React from 'react';
import { shallow } from 'enzyme';
import AboutPage from '.';

describe('<AboutPage />', () => {
  test('Renders component without crashing', () => {
    const component = shallow(<AboutPage />);

    expect(component).toMatchSnapshot();
  });
});
