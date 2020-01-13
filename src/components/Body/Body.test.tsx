import Enzyme, { shallow } from 'enzyme';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import React from 'react';

import Body from './Body';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

describe('Body component', () => {
  it('shallow renders without crashing', () => {
    shallow(<Body />);
  });
});
