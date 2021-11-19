import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import { removeBook } from '../../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';
import '../../css/components/bookspage/bookpanel.css';

export default function BookPanel(props) {
  const dispatch = useDispatch();
  const { item } = props;
  // eslint-disable-next-line
  const { item_id, title, category } = item;
  return (
    <div className="book-panel">
      <div className="book-info">
        <div className="category-text">{category}</div>
        <div className="title-text">{title}</div>
        <div className="author-text">someone</div>
        <div>
          <button className="book-btn comment-btn" type="button">Comment</button>
          {/* eslint-disable-next-line */}
          <button className="book-btn remove-btn" type="button" id={item_id} onClick={(e) => dispatch(removeBook({ item_id: e.target.id }))}>Remove</button>
          <button className="book-btn edit-btn" type="button">Edit</button>
        </div>
      </div>
      <div className="completeness">
        <div className="completeness-circle">
          <CircularProgressbar value={66} />
        </div>
        <div className="completeness-text">
          <p className="completeness-num">66%</p>
          <p className="completeness-txt">Completed</p>
        </div>
      </div>
      <div className="current-chapter">
        <p className="current-chap">CURRENT CHAPTER</p>
        <p className="chaper-num">Chapter 17</p>
        <button type="button" className="update-btn">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

BookPanel.defaultProps = {
  item: null,
  item_id: null,
  title: null,
  category: null,
};

BookPanel.propTypes = {
  item: PropTypes.objectOf,
  item_id: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
};
