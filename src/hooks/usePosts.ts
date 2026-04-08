import { useState, useCallback } from 'react';
import type { Post, StatusKey } from '@/types';
import { SEED_POSTS } from '@/lib/seed';

const STORAGE_KEY = 'keystone-content-posts-v2';

function loadPosts(): Post[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {}
  // First load — use seed data
  const seeded = SEED_POSTS.map(p => ({ ...p, user_id: 'local' }));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
  return seeded;
}

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>(loadPosts);

  const save = useCallback((updated: Post[]) => {
    setPosts(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }, []);

  const addPost = useCallback((post: Omit<Post, 'id' | 'created_at' | 'user_id'>) => {
    const newPost: Post = {
      ...post,
      id: crypto.randomUUID(),
      created_at: new Date().toISOString(),
      user_id: 'local',
    };
    save([...posts, newPost]);
    return newPost;
  }, [posts, save]);

  const updatePost = useCallback((id: string, updates: Partial<Post>) => {
    save(posts.map(p => p.id === id ? { ...p, ...updates } : p));
  }, [posts, save]);

  const deletePost = useCallback((id: string) => {
    save(posts.filter(p => p.id !== id));
  }, [posts, save]);

  const movePost = useCallback((id: string, status: StatusKey) => {
    save(posts.map(p => p.id === id ? { ...p, status } : p));
  }, [posts, save]);

  return { posts, addPost, updatePost, deletePost, movePost };
}
