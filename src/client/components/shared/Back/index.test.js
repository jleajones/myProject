import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import 'jest-styled-components';
import PATHS from '@constants/paths';
import { themeS } from '@shared/theme';
import Back from '.';

test('Renders Back Button', () => {
  const component = renderer.create(
    <MemoryRouter initialEntries={[PATHS.driveWithUs.path]}>
      <Back theme={themeS} />
    </MemoryRouter>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
