import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import BlogPostForm from '../components/BlogPostForm/BlogPostForm';
import styles from './CreatePost.module.css';

const CreatePost = ({ onCreatePost }) => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (formData) => {
    // Generate a unique ID for the new post
    const newPost = {
      ...formData,
      id: Date.now().toString(),
      summary: formData.content.substring(0, 200) + '...' // Create a summary from content
    };

    onCreatePost(newPost);
    setIsSubmitted(true);
  };

  return (
    <div className={styles.createPost}>
      <h1>Create New Blog Post</h1>
      {isSubmitted ? (
        <div className={styles.success}>
          <p>Post created successfully!</p>
          <Link to="/" className={styles.backButton}>
            Back to Blog Posts
          </Link>
        </div>
      ) : (
        <BlogPostForm onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default CreatePost;
