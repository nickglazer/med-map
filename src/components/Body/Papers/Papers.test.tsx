import Enzyme, { shallow } from 'enzyme';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import React from 'react';

import Papers, { PapersProps } from './Papers';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

const getProps = (): PapersProps => ({
  searchTerm: '',
});

describe('Papers component', () => {
  it('shallow renders without crashing', () => {
    const props = getProps();
    shallow(<Papers {...props} />);
  });
});
