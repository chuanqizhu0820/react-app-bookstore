import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';
import '../../css/components/bookspage/bookinput.css';

const uuid = require('uuid');

export default function BookInput() {
  const dispatch = useDispatch();
  return (
    <div id="book-input-container">
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
        <p id="Title">Add new book</p>
        <input type="text" name="title" placeholder="Book title" id="title-input" required />
        <input type="text" name="category" placeholder="Category" id="category-input" required />
        <input type="submit" value="ADD BOOK" id="add-book-btn" />
      </form>
    </div>
  );
}
