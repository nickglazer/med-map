import Enzyme, { shallow } from 'enzyme';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import React from 'react';

import ActionsBar from './ActionsBar';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

describe('ActionsBar component', () => {
  it('shallow renders without crashing', () => {
    shallow(<ActionsBar />);
  });
});
