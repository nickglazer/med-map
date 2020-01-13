import Enzyme, { shallow } from 'enzyme';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import React from 'react';

import Book, { BookProps } from './Book';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

const getProps = (): BookProps => ({
  book: {
    creators: [''],
    publicationDate: '',
    publicationName: '',
    title: '',
  }
});

describe('Book component', () => {
  it('shallow renders without crashing', () => {
    const props = getProps();
    shallow(<Book {...props} />);
  });
});
