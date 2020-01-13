import React from 'react';

import { Book as BookType } from '../Books';

export interface BookProps {
  book: BookType;
}

const Book: React.FC<BookProps> = ({ book: { creators, title, publicationName, publicationDate }}) => {
  return <p>{`${title} ${creators.join(', ')} ${publicationName} ${publicationDate}`}</p>
};

export default Book;
