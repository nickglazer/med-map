import Enzyme, { shallow } from 'enzyme';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import React from 'react';

import Footer from './Footer';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

describe('Footer component', () => {
  it('shallow renders without crashing', () => {
    shallow(<Footer />);
  });
});
