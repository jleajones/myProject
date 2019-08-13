import React from 'react';
import { shallow } from 'enzyme';
import Container from '.';

describe('<Container />', () => {
  test('Renders component without crashing', () => {
    const component = shallow(
      <Container>
        <h1>Some content in here!</h1>
      </Container>
    );

    expect(component).toMatchSnapshot();
  });
});
