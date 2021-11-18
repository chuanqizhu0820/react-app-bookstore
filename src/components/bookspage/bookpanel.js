/* eslint-disable */
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';
import '../../css/components/bookspage/bookpanel.css';

export default function BookPanel(props) {
  const dispatch = useDispatch();
  const { item_id, title, category } = props.item;
  return (
    <div key={item_id} className="book-panel">
      <div className="book-info">
      <div>{category}</div>
      <div>{title}</div>
      <div>
          <button>Comment</button>
          <button type="button" className={item_id} onClick={(e) => dispatch(removeBook({ item_id: e.target.className }))}>Remove</button>
          <button>Edit</button>
      </div>
      </div>
      <div className="completeness">
          100%
      </div>
      <div className="current-chapter">
          <p>CURRENT CHAPTER</p>
          <p>Chapter 17</p>
          <button>Update Progress</button>
      </div>
    </div>
  );
}