import React from 'react';
import { shallow } from 'enzyme';
import Theme from '.';

describe('<Theme />', () => {
  test('Renders component without crashing', () => {
    const component = shallow(
      <Theme>
        <h1>some child!</h1>
      </Theme>
    );

    expect(component).toMatchSnapshot();
  });
});
