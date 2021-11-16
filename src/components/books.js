import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from '../redux/books/books';

import './books.css';

const uuid = require('uuid');

function Books() {
  const dispatch = useDispatch();
  const bookArr = useSelector((state) => state.booksReducer);
  return (
    <>
      <h1>Book List</h1>
      <form
        id="myForm"
        onSubmit={(e) => {
          e.preventDefault();
          const newBook = {
            id: uuid.v4(),
            title: e.target.title.value,
            author: e.target.author.value,
            year: e.target.year.value,
          };
          dispatch(addBook(newBook));
          document.getElementById('myForm').reset();
        }}
      >
        <label htmlFor="title">
          Title:
          <input type="text" name="title" required />
        </label>
        <label htmlFor="author">
          Author:
          <input type="text" name="author" required />
        </label>
        <label htmlFor="year">
          Year:
          <input type="text" name="year" required />
        </label>
        <input type="submit" value="Add Book" />
      </form>
      <ul>
        {bookArr.map(((item) => (
          <div key={item.id} className="book-item">
            <li>{`${item.title}, ${item.author}, ${item.year}`}</li>
            <button type="button" className={item.id} onClick={(e) => dispatch(removeBook({ id: e.target.className }))}>delete</button>
          </div>
        )))}
      </ul>
    </>
  );
}

export default Books;
