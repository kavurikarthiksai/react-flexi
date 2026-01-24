import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BlogPostItem from './BlogPostItem';
import styles from './BlogPostList.module.css';

const BlogPostList = ({ posts, onDelete }) => {
  if (!posts || posts.length === 0) {
    return (
      <div className={styles.emptyState} role="status">
        <p>No blog posts available at the moment.</p>
      </div>
    );
  }

  return (
    <section className={styles.blogPostList}>
      <div className={styles.grid}>      {posts.map((post) => (
          <div key={post.id} className={styles.postContainer}>
            <Link
              to={`/posts/${post.id}`}
              className={styles.postLink}
            >
              <BlogPostItem {...post} />
            </Link>
            <div className={styles.postActions}>
              <Link to={`/posts/${post.id}/edit`} className={styles.editButton}>
                Edit
              </Link>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onDelete(post.id);
                }}
                className={styles.deleteButton}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

BlogPostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BlogPostList;
