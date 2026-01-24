import React, { useState, useEffect, useMemo } from 'react';
import { Routes, Route, useParams, Link, useSearchParams } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPostDetail from './components/BlogPostDetail';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import styles from './App.module.css';
import SearchBar from './SearchBar';

const initialPosts = [
  {
    id: '1',
    title: 'Getting Started with React',
    summary: 'Learn the basics of React and build your first application.',
    content: `<p>React is a powerful JavaScript library for building user interfaces. In this post, we'll explore the fundamentals of React and walk through creating your first application.</p>
              <h2>Why React?</h2>
              <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
              <h2>Key Concepts</h2>
              <ul>
                <li>Components</li>
                <li>Props</li>
                <li>State</li>
                <li>Lifecycle Methods</li>
              </ul>`,
    author: 'Jane Smith',
    date: '2023-01-01',
  },
  {
    id: '2',
    title: 'CSS Grid vs. Flexbox',
    summary: 'A comparison of two powerful layout systems in CSS.',
    content: `<p>CSS Grid and Flexbox are two of the most powerful tools in modern web development for creating responsive layouts. Let's explore when to use each one.</p>
              <h2>Flexbox</h2>
              <p>Flexbox is designed for one-dimensional layouts - either a row or a column. It's perfect for:</p>
              <ul>
                <li>Navigation menus</li>
                <li>Card layouts</li>
                <li>Centering content</li>
              </ul>
              <h2>CSS Grid</h2>
              <p>CSS Grid is designed for two-dimensional layouts - rows and columns together. It's ideal for:</p>
              <ul>
                <li>Page layouts</li>
                <li>Complex grid systems</li>
                <li>Card layouts with varying sizes</li>
              </ul>`,
    author: 'John Doe',
    date: '2023-02-15',
  },
  {
    id: '3',
    title: 'Accessibility in Web Development',
    summary: 'Tips for making your web applications more accessible.',
    content: `<p>Web accessibility is crucial for ensuring that your applications can be used by everyone, regardless of their abilities.</p>
              <h2>Key Principles</h2>
              <ul>
                <li>Semantic HTML</li>
                <li>ARIA attributes</li>
                <li>Keyboard navigation</li>
                <li>Color contrast</li>
              </ul>
              <p>Remember: accessibility is not a feature, it's a requirement.</p>`,
    author: 'Sarah Johnson',
    date: '2023-03-10',
  },
];

function App() {
  // Load posts from localStorage or use initialPosts
  const [posts, setPosts] = useState(() => {
    const storedPosts = localStorage.getItem('blogPosts');
    return storedPosts ? JSON.parse(storedPosts) : initialPosts;
  });

  // Save posts to localStorage whenever posts change
  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
  }, [posts]);

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const filteredPosts = useMemo(() => {
    if (!query) return posts;

    const lowerCaseQuery = query.toLowerCase();
    return posts.filter((post) => {
      const titleMatch = post.title.toLowerCase().includes(lowerCaseQuery);
      const summaryMatch = post.summary.toLowerCase().includes(lowerCaseQuery);
      const contentMatch = post.content.toLowerCase().includes(lowerCaseQuery);
      return titleMatch || summaryMatch || contentMatch;
    });
  }, [posts, query]);

  const handleCreatePost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const handleUpdatePost = (updatedPost) => {
    setPosts(posts.map(post => 
      post.id === updatedPost.id ? updatedPost : post
    ));
  };

  const handleDeletePost = (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(post => post.id !== postId));
    }
  };

  return (
    <div className={styles.appContainer}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.navLink}>Blog Posts</Link>
        <SearchBar />
        <Link to="/create" className={styles.navLinkCreate}>Create New Post</Link>
      </nav>

      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <h1>Blog Posts</h1>
              {filteredPosts.length > 0 ? (
                <BlogPostList posts={filteredPosts} onDelete={handleDeletePost} />
              ) : (
                <p>No posts found for "{query}".</p>
              )}
            </>
          } 
        />
        <Route 
          path="/posts/:id" 
          element={<BlogPostRenderer posts={posts} onDelete={handleDeletePost} />} 
        />
        <Route
          path="/create"
          element={<CreatePost onCreatePost={handleCreatePost} />}
        />
        <Route
          path="/posts/:id/edit"
          element={<EditPost posts={posts} onUpdatePost={handleUpdatePost} />}
        />
      </Routes>
    </div>
  );
}

// Helper component to render blog posts
function BlogPostRenderer({ posts, onDelete }) {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);
  
  if (!post) {
    return <h2>Post not found!</h2>;
  }
  
  return <BlogPostDetail {...post} onDelete={onDelete} />;
}

export default App;
