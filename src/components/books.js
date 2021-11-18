import { useSelector } from 'react-redux';
import BookPanel from './bookspage/bookpanel';
import BookInput from './bookspage/bookinput';

import '../css/components/books.css';

/* eslint-disable */
function Books() {
  const bookArr = useSelector((state) => state.booksReducer);
  return (
    <>
      <ul>
        {bookArr.map(((item) => (
          <BookPanel item={item} />
        )))}
      </ul>
      <BookInput />
    </>
  );
}

export default Books;
