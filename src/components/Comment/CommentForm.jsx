import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './CommentForm.module.css';

const CommentForm = ({ onSubmit, isLoggedIn, userName }) => {
  const [name, setName] = useState(userName || '');
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((!isLoggedIn && !name.trim()) || !text.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    onSubmit({
      name: isLoggedIn ? userName : name,
      text,
      date: new Date().toISOString(),
      avatar: undefined, // Optionally add avatar logic
    });
    setText('');
    if (!isLoggedIn) setName('');
  };

  return (
    <form className={styles.commentForm} onSubmit={handleSubmit} aria-label="Add a comment">
      {!isLoggedIn && (
        <div className={styles.formGroup}>
          <label htmlFor="comment-name">Name</label>
          <input
            id="comment-name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            autoComplete="name"
          />
        </div>
      )}
      <div className={styles.formGroup}>
        <label htmlFor="comment-text">Comment</label>
        <textarea
          id="comment-text"
          value={text}
          onChange={e => setText(e.target.value)}
          required
          rows={3}
        />
      </div>
      {error && <div className={styles.error} role="alert">{error}</div>}
      <button type="submit" className={styles.submitButton}>Post Comment</button>
    </form>
  );
};

CommentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool,
  userName: PropTypes.string,
};

export default CommentForm;
