import React from 'react';
import { shallow } from 'enzyme';

import Dialog from './index';

describe('<Dialog />', () => {
  test('Renders component without crashing', () => {
    const handleCloseDialog = jest.fn();
    const open = true;
    const title = 'test-dialog';
    const component = shallow(
      <Dialog
        onClose={handleCloseDialog}
        label={title}
        title={title}
        open={open}
      >
        <div>some test content</div>
      </Dialog>
    );

    expect(component).toMatchSnapshot();
  });
});
