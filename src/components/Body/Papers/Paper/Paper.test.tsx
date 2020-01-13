import Enzyme, { shallow } from 'enzyme';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import React from 'react';

import Paper, { PaperProps } from './Paper';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

const getProps = (): PaperProps => ({
  id: '',
});

describe('Paper component', () => {
  it('shallow renders without crashing', () => {
    const props = getProps();
    shallow(<Paper {...props} />);
  });
});
