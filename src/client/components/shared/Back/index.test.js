import React from 'react';
import { render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import 'jest-styled-components';
import PATHS from '@constants/paths';
import { themeS } from '@shared/theme';
import Back from '.';

test('Renders Back Button', () => {
  const component = render(
    <MemoryRouter initialEntries={[PATHS.driveWithUs.path]}>
      <Back theme={themeS} />
    </MemoryRouter>
  );

  expect(component).toMatchSnapshot();
});
