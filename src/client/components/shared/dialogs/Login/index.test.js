import React from 'react';
import { shallow } from 'enzyme';

import LoginDialog from './index';

describe('<LoginDialog />', () => {
  test('Renders component without crashing', () => {
    const handleCloseDialog = jest.fn();
    const open = false;
    const component = shallow(
      <LoginDialog handleClose={handleCloseDialog} open={open} />
    );

    expect(component).toMatchSnapshot();
  });
});
