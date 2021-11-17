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
            item_id: uuid.v4(),
            title: e.target.title.value,
            category: e.target.category.value,
          };
          dispatch(addBook(newBook));
          document.getElementById('myForm').reset();
        }}
      >
        <label htmlFor="title">
          Title:
          <input type="text" name="title" required />
        </label>
        <label htmlFor="year">
          Category:
          <input type="text" name="category" required />
        </label>
        <input type="submit" value="Add Book" />
      </form>
      <ul>
        {bookArr.map(((item) => (
          <div key={item.item_id} className="book-item">
            <li>{`${item.title}, ${item.category}`}</li>
            <button type="button" className={item.item_id} onClick={(e) => dispatch(removeBook({ item_id: e.target.className }))}>delete</button>
          </div>
        )))}
      </ul>
    </>
  );
}

export default Books;
