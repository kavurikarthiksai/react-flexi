import React from 'react';
import PropTypes from 'prop-types';
import styles from './BlogPostItem.module.css';

const BlogPostItem = ({ title, summary, date, author }) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <article className={styles.blogPostItem}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.meta}>
        <p className={styles.author}>By {author}</p>
        <time className={styles.date} dateTime={date}>
          {formattedDate}
        </time>
      </div>
      <p className={styles.summary}>{summary}</p>
      <span className={styles.readMore}>Read more →</span>
    </article>
  );
};

BlogPostItem.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default BlogPostItem;
