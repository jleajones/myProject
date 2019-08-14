import React from 'react';
import { shallow } from 'enzyme';

import CarrierSignUp from './index';

describe('<CarrierSignUp />', () => {
  test('Renders component without crashing', () => {
    const handleCloseDialog = jest.fn();
    const open = false;
    const component = shallow(
      <CarrierSignUp handleClose={handleCloseDialog} open={open} />
    );

    expect(component).toMatchSnapshot();
  });
});
