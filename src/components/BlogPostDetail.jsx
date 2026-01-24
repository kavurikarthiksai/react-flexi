import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import styles from './BlogPostDetail.module.css';
import CommentList from './Comment/CommentList';
import CommentForm from './Comment/CommentForm';
import { useComments } from './Comment/useComments';

const BlogPostDetail = ({ id, title, content, author, date, onDelete }) => {
  const navigate = useNavigate();
  const [comments, addComment] = useComments(id);

  // Error handling for missing data
  if (!title || !content || !author || !date) {
    return (
      <div className={styles.notFound} role="alert">
        <h2>Blog post not found</h2>
        <p>The requested blog post could not be displayed.</p>
      </div>
    );
  }

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  return (
    <article className={styles.blogPostDetail}>
      <Link to="/" className={styles.backButton} aria-label="Back to blog posts">
        ← Back to Posts
      </Link>
      <header>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.meta}>
          <p className={styles.author}>
            By <span className={styles.authorName}>{author}</span>
          </p>
          <time className={styles.date} dateTime={date}>
            Published on {formattedDate}
          </time>
        </div>
      </header>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div className={styles.actions}>
        <Link to={`/posts/${id}/edit`} className={styles.editButton}>
          Edit Post
        </Link>
        <button
          onClick={() => {
            onDelete(id);
            navigate('/');
          }}
          className={styles.deleteButton}
        >
          Delete Post
        </button>
      </div>
      <section className={styles.commentsSection} aria-label="Comments">
        <h2>Comments</h2>
        <CommentList comments={comments} />
        <CommentForm onSubmit={addComment} />
      </section>
    </article>
  );
};

BlogPostDetail.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
  ]).isRequired,
  onDelete: PropTypes.func,
};

export default BlogPostDetail;
