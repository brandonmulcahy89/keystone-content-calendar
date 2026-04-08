import { useState } from 'react';
import type { Post, PillarKey, StatusKey, PlatformKey, FormatKey } from '@/types';
import { PILLARS, STATUSES, PLATFORMS, FORMATS } from '@/types';
import { TEMPLATES } from '@/lib/templates';
import { getHashtagString, PINTEREST_KEYWORDS } from '@/lib/hashtags';

// Image generation note for Emma
const IMAGE_TIPS: Record<string, string> = {
  reel: '🎬 REEL: Film vertical (9:16). Use your phone. Raw audio works best. 15-60 seconds.',
  story: '⭕ STORY: Vertical (9:16). Add stickers, polls, countdowns. Links if 10k+ followers.',
  post: '🖼️ POST: Square (1:1) or 4:5. High-res photo. Good lighting. Show the finished product.',
  carousel: '📚 CAROUSEL: 1:1 slides. First slide = hook. 3-10 slides. Design in Canva or use photos.',
};

interface Props {
  post?: Post | null;
  defaultDate?: string;
  onSave: (data: Omit<Post, 'id' | 'created_at' | 'user_id'>) => void;
  onUpdate?: (id: string, data: Partial<Post>) => void;
  onDelete?: (id: string) => void;
  onClose: () => void;
}

export default function PostEditor({ post, defaultDate, onSave, onUpdate, onDelete, onClose }: Props) {
  const [title, setTitle] = useState(post?.title || '');
  const [date, setDate] = useState(post?.date || defaultDate || '');
  const [pillar, setPillar] = useState<PillarKey>(post?.pillar || 'before_after');
  const [status, setStatus] = useState<StatusKey>(post?.status || 'idea');
  const [platforms, setPlatforms] = useState<PlatformKey[]>(post?.platforms || []);
  const [caption, setCaption] = useState(post?.caption || '');
  const [notes, setNotes] = useState(post?.notes || '');
  const [format, setFormat] = useState<FormatKey>(post?.format || 'post');

  function togglePlatform(key: PlatformKey) {
    setPlatforms(prev => prev.includes(key) ? prev.filter(p => p !== key) : [...prev, key]);
  }

  function applyTemplate() {
    const template = TEMPLATES.find(t => t.pillar === pillar);
    if (template) {
      setCaption(template.caption);
      setPlatforms(template.platforms);
      if (!title) setTitle(template.title);
    }
  }

  function handleSave() {
    if (!title.trim()) return;
    const data = { title, date, pillar, status, platforms, caption, notes, format };
    if (post && onUpdate) {
      onUpdate(post.id, data);
    } else {
      onSave(data);
    }
    onClose();
  }

  function addHashtags() {
    const tags = getHashtagString(pillar, platforms, format);
    if (tags) {
      setCaption(prev => prev.trim() + '\n\n' + tags);
    }
    // Show Pinterest keywords if Pinterest is selected
    if (platforms.includes('pinterest')) {
      const keywords = PINTEREST_KEYWORDS[pillar] || [];
      setNotes(prev => prev + (prev ? '\n\n' : '') + 'Pinterest keywords: ' + keywords.join(', '));
    }
  }

  function handleDelete() {
    if (post && onDelete && confirm('Delete this post?')) {
      onDelete(post.id);
      onClose();
    }
  }

  const inputStyle = {
    background: 'var(--color-bg)',
    border: '1px solid var(--color-border)',
    color: 'var(--color-text)',
    borderRadius: '8px',
    padding: '8px 12px',
    fontSize: '13px',
    width: '100%',
    outline: 'none',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.7)' }}>
      <div
        className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl p-5"
        style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)' }}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            {post ? 'Edit Post' : 'New Post'}
          </h3>
          <button onClick={onClose} className="text-lg" style={{ color: 'var(--color-muted)' }}>✕</button>
        </div>

        <div className="space-y-3">
          <div>
            <label className="text-xs font-semibold mb-1 block" style={{ color: 'var(--color-muted)' }}>Title</label>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Post title..." style={inputStyle} />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold mb-1 block" style={{ color: 'var(--color-muted)' }}>Date</label>
              <input type="date" value={date} onChange={e => setDate(e.target.value)} style={inputStyle} />
            </div>
            <div>
              <label className="text-xs font-semibold mb-1 block" style={{ color: 'var(--color-muted)' }}>Status</label>
              <select value={status} onChange={e => setStatus(e.target.value as StatusKey)} style={inputStyle}>
                {STATUSES.map(s => <option key={s.key} value={s.key}>{s.label}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold mb-1 block" style={{ color: 'var(--color-muted)' }}>Format</label>
            <div className="flex flex-wrap gap-1.5">
              {FORMATS.map(f => (
                <button
                  key={f.key}
                  onClick={() => setFormat(f.key)}
                  className="text-xs px-2.5 py-1.5 rounded-lg font-medium transition-all"
                  style={{
                    background: format === f.key ? f.color + '33' : 'var(--color-bg)',
                    color: format === f.key ? f.color : 'var(--color-muted)',
                    border: '1px solid ' + (format === f.key ? f.color : 'var(--color-border)'),
                  }}
                >
                  {f.icon} {f.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold mb-1 block" style={{ color: 'var(--color-muted)' }}>Content Pillar</label>
            <div className="flex flex-wrap gap-1.5">
              {PILLARS.map(p => (
                <button
                  key={p.key}
                  onClick={() => setPillar(p.key)}
                  className="text-xs px-2.5 py-1.5 rounded-lg font-medium transition-all"
                  style={{
                    background: pillar === p.key ? p.color + '33' : 'var(--color-bg)',
                    color: pillar === p.key ? p.color : 'var(--color-muted)',
                    border: `1px solid ${pillar === p.key ? p.color : 'var(--color-border)'}`,
                  }}
                >
                  {p.emoji} {p.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold mb-1 block" style={{ color: 'var(--color-muted)' }}>Platforms</label>
            <div className="flex flex-wrap gap-1.5">
              {PLATFORMS.map(p => (
                <button
                  key={p.key}
                  onClick={() => togglePlatform(p.key)}
                  className="text-xs px-2.5 py-1.5 rounded-lg font-medium transition-all"
                  style={{
                    background: platforms.includes(p.key) ? 'var(--color-accent)' + '22' : 'var(--color-bg)',
                    color: platforms.includes(p.key) ? 'var(--color-accent)' : 'var(--color-muted)',
                    border: `1px solid ${platforms.includes(p.key) ? 'var(--color-accent)' : 'var(--color-border)'}`,
                  }}
                >
                  {p.icon} {p.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-semibold" style={{ color: 'var(--color-muted)' }}>Caption</label>
              <div className="flex gap-1.5">
                <button
                  onClick={addHashtags}
                  className="text-[10px] font-semibold px-2 py-1 rounded"
                  style={{ background: 'var(--color-pillar-trend)', color: 'white' }}
                >
                  # Add Hashtags
                </button>
                <button
                  onClick={applyTemplate}
                  className="text-[10px] font-semibold px-2 py-1 rounded"
                  style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
                >
                  Apply Template
                </button>
              </div>
            </div>
            <textarea
              value={caption}
              onChange={e => setCaption(e.target.value)}
              rows={8}
              placeholder="Write your caption..."
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </div>

          <div>
            <label className="text-xs font-semibold mb-1 block" style={{ color: 'var(--color-muted)' }}>Internal Notes</label>
            <textarea
              value={notes}
              onChange={e => setNotes(e.target.value)}
              rows={3}
              placeholder="Strategy notes, shoot details, boost budget..."
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </div>
          {/* Image/media guidance */}
          <div className="p-3 rounded-lg" style={{ background: 'rgba(232, 168, 56, 0.08)', border: '1px solid rgba(232, 168, 56, 0.2)' }}>
            <div className="text-xs font-semibold mb-1" style={{ color: 'var(--color-accent)' }}>📷 Media Guide</div>
            <div className="text-[11px] mb-1.5" style={{ color: 'var(--color-muted)' }}>
              {IMAGE_TIPS[format] || IMAGE_TIPS.post}
            </div>
            <div className="text-[10px] space-y-0.5" style={{ color: 'var(--color-muted)' }}>
              <div>→ Check the project photo folder on OneDrive for finished project shots</div>
              <div>→ Shop/process videos: film on your phone, vertical, raw audio</div>
              <div>→ Before photos: check the measure sheet folder for each job</div>
              <div>→ Graphics/text overlays: use Canva (keystone brand kit is saved)</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-5 pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
          <div>
            {post && onDelete && (
              <button onClick={handleDelete} className="text-xs font-medium" style={{ color: '#D95555' }}>
                Delete Post
              </button>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="text-xs font-medium px-4 py-2 rounded-lg"
              style={{ background: 'var(--color-bg)', color: 'var(--color-muted)', border: '1px solid var(--color-border)' }}
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="text-xs font-semibold px-4 py-2 rounded-lg"
              style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
            >
              {post ? 'Save Changes' : 'Create Post'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
