import { useState, useCallback, useEffect } from 'react';
import type { Post, StatusKey } from '@/types';

const API_URL = import.meta.env.VITE_API_URL || 'https://midlands-mario-msie-temperature.trycloudflare.com';

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/posts`);
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.error('Failed to fetch posts:', err);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const addPost = useCallback(async (post: Omit<Post, 'id' | 'created_at' | 'user_id'>) => {
    await fetch(`${API_URL}/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    });
    await fetchPosts();
  }, [fetchPosts]);

  const updatePost = useCallback(async (id: string, updates: Partial<Post>) => {
    await fetch(`${API_URL}/posts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    });
    await fetchPosts();
  }, [fetchPosts]);

  const deletePost = useCallback(async (id: string) => {
    await fetch(`${API_URL}/posts/${id}`, { method: 'DELETE' });
    await fetchPosts();
  }, [fetchPosts]);

  const movePost = useCallback(async (id: string, status: StatusKey) => {
    await updatePost(id, { status });
  }, [updatePost]);

  return { posts, loading, addPost, updatePost, deletePost, movePost, refetch: fetchPosts };
}
