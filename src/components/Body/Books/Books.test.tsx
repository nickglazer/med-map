import Enzyme, { shallow } from 'enzyme';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import React from 'react';

import Books, { BooksProps } from './Books';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

const getProps = (): BooksProps => ({
  searchTerm: '',
});

describe('Books component', () => {
  it('shallow renders without crashing', () => {
    const props = getProps();
    shallow(<Books {...props} />);
  });
});
