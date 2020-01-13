import Enzyme, { shallow } from 'enzyme';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import React from 'react';

import Stats, { StatsProps } from './Stats';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

const getProps = (): StatsProps => ({
  disease: '',
  year: '',
});

describe('Stats component', () => {
  it('shallow renders without crashing', () => {
    const props = getProps();
    shallow(<Stats {...props} />);
  });
});
