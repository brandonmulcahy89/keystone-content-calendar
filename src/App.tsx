import { useState } from 'react';
import type { Post, CaptionTemplate } from '@/types';
import { usePosts } from '@/hooks/usePosts';
import ContentMixBar from '@/components/ContentMixBar';
import CalendarGrid from '@/components/CalendarGrid';
import KanbanBoard from '@/components/KanbanBoard';
import PostEditor from '@/components/PostEditor';
import TemplateLibrary from '@/components/TemplateLibrary';

type View = 'calendar' | 'kanban' | 'templates';

export default function App() {
  const { posts, addPost, updatePost, deletePost, movePost, refetch } = usePosts();
  const [view, setView] = useState<View>('calendar');
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 3, 1)); // April 2026
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [newPostDate, setNewPostDate] = useState<string | null>(null);
  const [templatePost, setTemplatePost] = useState<CaptionTemplate | null>(null);
  const [generating, setGenerating] = useState(false);

  const showEditor = editingPost !== null || newPostDate !== null || templatePost !== null;

  const API_URL = import.meta.env.VITE_API_URL || 'https://midlands-mario-msie-temperature.trycloudflare.com';

  async function handleGenerateMonth() {
    const monthName = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth() + 1;

    setGenerating(true);
    try {
      // First try without replace
      let res = await fetch(`${API_URL}/generate-month`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ year, month }),
      });
      let data = await res.json();

      // If month already has posts, ask to replace
      if (data.existing) {
        if (confirm(`${monthName} already has ${data.existing} posts. Replace them with fresh AI-generated content?`)) {
          res = await fetch(`${API_URL}/generate-month`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ year, month, replace: true }),
          });
          data = await res.json();
        } else {
          setGenerating(false);
          return;
        }
      }

      if (data.generated) {
        alert(`Generated ${data.generated} posts for ${monthName}!`);
        await refetch();
      } else if (data.error) {
        alert(`Error: ${data.error}`);
      }
    } catch {
      alert('Failed to generate — check if the API server is running');
    }
    setGenerating(false);
  }

  function handleUseTemplate(template: CaptionTemplate) {
    setTemplatePost(template);
  }

  const navBtnStyle = (active: boolean) => ({
    background: active ? 'var(--color-accent)' : 'var(--color-card)',
    color: active ? 'var(--color-bg)' : 'var(--color-muted)',
    border: `1px solid ${active ? 'var(--color-accent)' : 'var(--color-border)'}`,
  });

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-bg)' }}>
      {/* Header */}
      <header className="px-5 py-4" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold" style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}>
              KK
            </div>
            <div>
              <h1 className="text-sm font-bold" style={{ color: 'var(--color-text)', fontFamily: "'Playfair Display', serif" }}>
                Content Calendar
              </h1>
              <p className="text-[10px]" style={{ color: 'var(--color-muted)' }}>Keystone Kitchens</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {(['calendar', 'kanban', 'templates'] as const).map(v => (
              <button
                key={v}
                onClick={() => setView(v)}
                className="text-xs font-medium px-3 py-1.5 rounded-lg transition-all"
                style={navBtnStyle(view === v)}
              >
                {v === 'calendar' ? '📅 Calendar' : v === 'kanban' ? '📋 Board' : '📝 Templates'}
              </button>
            ))}
            <button
              onClick={handleGenerateMonth}
              disabled={generating}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg ml-2 disabled:opacity-50"
              style={{ background: 'var(--color-pillar-trend)', color: 'white' }}
            >
              {generating ? '⏳ Generating...' : '🤖 Generate Month'}
            </button>
            <button
              onClick={() => setNewPostDate(new Date().toISOString().split('T')[0])}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg"
              style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
            >
              + New Post
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-5 py-5">
        {view !== 'templates' && <ContentMixBar posts={posts} />}

        {view === 'calendar' && (
          <CalendarGrid
            posts={posts}
            currentMonth={currentMonth}
            onMonthChange={setCurrentMonth}
            onDayClick={(date) => setNewPostDate(date)}
            onPostClick={(post) => setEditingPost(post)}
          />
        )}

        {view === 'kanban' && (
          <KanbanBoard
            posts={posts}
            onMove={movePost}
            onPostClick={(post) => setEditingPost(post)}
          />
        )}

        {view === 'templates' && (
          <div>
            <h2 className="text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Caption Templates
            </h2>
            <TemplateLibrary onUseTemplate={handleUseTemplate} />
          </div>
        )}
      </main>

      {/* Post Editor Modal */}
      {showEditor && (
        <PostEditor
          post={editingPost}
          defaultDate={newPostDate || undefined}
          onSave={(data) => {
            if (templatePost) {
              addPost({
                ...data,
                caption: data.caption || templatePost.caption,
                platforms: data.platforms.length ? data.platforms : templatePost.platforms,
                pillar: data.pillar || templatePost.pillar,
                title: data.title || templatePost.title,
              });
            } else {
              addPost(data);
            }
          }}
          onUpdate={updatePost}
          onDelete={deletePost}
          onClose={() => {
            setEditingPost(null);
            setNewPostDate(null);
            setTemplatePost(null);
          }}
        />
      )}
    </div>
  );
}
