import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import styles from './CommentList.module.css';

const CommentList = ({ comments }) => (
  <div className={styles.commentList} aria-live="polite">
    {comments.length === 0 ? (
      <div className={styles.noComments}>No comments yet.</div>
    ) : (
      comments.map((comment, idx) => (
        <Comment key={idx} {...comment} />
      ))
    )}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date),
      ]).isRequired,
      text: PropTypes.string.isRequired,
      avatar: PropTypes.string,
    })
  ).isRequired,
};

export default CommentList;
