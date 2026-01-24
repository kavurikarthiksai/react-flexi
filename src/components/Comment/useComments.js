import { useState, useEffect } from 'react';

// Key for localStorage
const STORAGE_KEY = 'blogComments';

export function useComments(postId) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const allComments = JSON.parse(stored);
      setComments(allComments[postId] || []);
    }
  }, [postId]);

  const addComment = (comment) => {
    setComments(prev => {
      const updated = [...prev, comment];
      const stored = localStorage.getItem(STORAGE_KEY);
      const allComments = stored ? JSON.parse(stored) : {};
      allComments[postId] = updated;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(allComments));
      return updated;
    });
  };

  return [comments, addComment];
}
