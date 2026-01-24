import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import BlogPostForm from '../components/BlogPostForm/BlogPostForm';
import styles from './EditPost.module.css';

const EditPost = ({ posts, onUpdatePost }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const post = posts.find(p => p.id === id);

  if (!post) {
    return (
      <div className={styles.notFound}>
        <h1>Post Not Found</h1>
        <p>The blog post you're trying to edit doesn't exist.</p>
        <Link to="/" className={styles.backButton}>
          Back to Blog Posts
        </Link>
      </div>
    );
  }

  const handleSubmit = (formData) => {
    const updatedPost = {
      ...post,
      ...formData,
      summary: formData.content.substring(0, 200) + '...' // Update summary from content
    };
    onUpdatePost(updatedPost);
    setIsSubmitted(true);
  };

  return (
    <div className={styles.editPost}>
      <h1>Edit Blog Post</h1>
      {isSubmitted ? (
        <div className={styles.success}>
          <p>Post updated successfully!</p>
          <Link to={`/posts/${id}`} className={styles.backButton}>
            Back to Post
          </Link>
        </div>
      ) : (
        <BlogPostForm post={post} onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default EditPost;
