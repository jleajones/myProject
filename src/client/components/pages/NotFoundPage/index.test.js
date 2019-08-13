import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '.';

describe('<NotFoundPage />', () => {
  test('Renders component without crashing', () => {
    const component = shallow(<NotFoundPage />);

    expect(component).toMatchSnapshot();
  });
});
