import Enzyme, { shallow } from 'enzyme';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import React from 'react';

import VolunteerButton, { VolunteerButtonProps } from './VolunteerButton';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

const getProps = (): VolunteerButtonProps => ({
  location: '',
  searchTerm: '',
});

describe('VolunteerButton component', () => {
  it('shallow renders without crashing', () => {
    const props = getProps();
    shallow(<VolunteerButton {...props} />);
  });
});
