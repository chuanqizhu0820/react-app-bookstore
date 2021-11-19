import { useSelector } from 'react-redux';
import BookPanel from './bookspage/bookpanel';
import BookInput from './bookspage/bookinput';
import '../css/components/books.css';

/* eslint-disable */
function Books() {
  console.log("the books comp is runing")
  const bookArr = useSelector((state) => state.booksReducer);
  return (
    <main>
      <section id="bookpanel-section">
        {bookArr.map(((item) => (
        <BookPanel item={item} />
        )))}
      </section>
      <hr id="panel-input-hr" />
      <section>
        <BookInput />
      </section>
    </main>
  );
}

export default Books;
