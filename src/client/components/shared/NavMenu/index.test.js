import React from 'react';
import { shallow } from 'enzyme';

import NavMenu from '.';

describe('<NavMenu />', () => {
  test('Renders component without crashing', () => {
    const handleCloseDialog = jest.fn();
    const handleOpenDialog = jest.fn();
    const open = false;
    const component = shallow(
      <NavMenu
        handleCloseDialog={handleCloseDialog}
        handleOpenDialog={handleOpenDialog}
        open={open}
      />
    );

    expect(component).toMatchSnapshot();
  });
});
