import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import { themeS } from '@shared/theme';
import Back from '.';

test('Renders Back Button', () => {
  const component = shallow(<Back theme={themeS} />);

  expect(component).toMatchSnapshot();
});
