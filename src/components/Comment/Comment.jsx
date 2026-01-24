import React from 'react';
import PropTypes from 'prop-types';
import styles from './Comment.module.css';

function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

const Comment = ({ name, date, text, avatar }) => (
  <div className={styles.comment}>
    {avatar && (
      <img src={avatar} alt={name + " avatar"} className={styles.avatar} width={50} height={50} />
    )}
    <div className={styles.body}>
      <div className={styles.header}>
        <span className={styles.name}>{name}</span>
        <span className={styles.date}>{formatDate(date)}</span>
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
  ]).isRequired,
  text: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};

export default Comment;
