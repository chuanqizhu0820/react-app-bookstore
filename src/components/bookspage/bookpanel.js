/* eslint-disable */
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../../css/components/bookspage/bookpanel.css';

export default function BookPanel(props) {
  const dispatch = useDispatch();
  const { item_id, title, category } = props.item;
  return (
    <div key={item_id} className="book-panel">
      <div className="book-info">
      <div className="category-text">{category}</div>
      <div className="title-text">{title}</div>
      <div className="author-text">someone</div>
      <div>
          <button className="book-btn comment-btn">Comment</button>
          <button className="book-btn remove-btn" type="button" id={item_id} onClick={(e) => dispatch(removeBook({ item_id: e.target.id }))}>Remove</button>
          <button className="book-btn edit-btn">Edit</button>
      </div>
      </div>
      <div className="completeness">
       <div className="completeness-circle">
       <CircularProgressbar value={66} />
       </div>
       <div className="completeness-text">
        <p className="completeness-num">100%</p>
        <p className="completeness-txt">Completed</p>
       </div>
      </div>
      <div className="current-chapter">
          <p className="current-chap">CURRENT CHAPTER</p>
          <p className="chaper-num">Chapter 17</p>
          <button className="update-btn">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}