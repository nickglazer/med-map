import React, { useEffect, useState } from 'react';

import Book from './Book';

export interface BooksProps {
  searchTerm: string;
}

// TODO creators is not actually a list of strings, it is a list of objects
export interface Book {
  creators: string[];
  title: string;
  publicationName: string;
  publicationDate: string;
}

const Books: React.FC<BooksProps> = ({ searchTerm }) => {
  const [books, setBooks] = useState<Book[]>();

  useEffect(() => {
    const url = `http://api.springer.com/metadata/json?q=keyword:${searchTerm}&api_key=${process.env.REACT_APP_SPRINGER_API_KEY}`;
    fetch(url).then(res => res.json()).then(res => setBooks(res.records.map(({ creators, title, publicationName, publicationDate }: any) => ({ creators, title, publicationName, publicationDate }))));
  }, [searchTerm]);

  if (books) {
    return (
      <>
        <h3>Books</h3>
        {books.map((book, index: number) => <Book key={index} book={book} />)}
      </>
    );
  }
  return  null;
};

export default Books;
