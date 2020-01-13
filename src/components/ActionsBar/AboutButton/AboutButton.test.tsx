import Enzyme, { shallow } from 'enzyme';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import React from 'react';

import AboutButton from './AboutButton';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

describe('AboutButton component', () => {
  it('shallow renders without crashing', () => {
    shallow(<AboutButton />);
  });
});
