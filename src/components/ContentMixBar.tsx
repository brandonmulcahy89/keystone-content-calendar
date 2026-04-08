import { PILLARS } from '@/types';
import type { Post } from '@/types';

interface Props {
  posts: Post[];
}

export default function ContentMixBar({ posts }: Props) {
  const counts: Record<string, number> = {};
  PILLARS.forEach(p => { counts[p.key] = 0; });
  posts.forEach(p => { counts[p.pillar] = (counts[p.pillar] || 0) + 1; });
  const total = posts.length || 1;

  return (
    <div className="mb-5">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: 'var(--color-muted)' }}>
          Content Mix
        </span>
        <span className="text-xs" style={{ color: 'var(--color-muted)' }}>{posts.length} posts</span>
      </div>
      <div className="flex h-3 rounded-full overflow-hidden" style={{ background: 'var(--color-card)' }}>
        {PILLARS.map(pillar => {
          const count = counts[pillar.key];
          if (!count) return null;
          return (
            <div
              key={pillar.key}
              title={`${pillar.label}: ${count}`}
              style={{
                width: `${(count / total) * 100}%`,
                background: pillar.color,
                transition: 'width 0.3s ease',
              }}
            />
          );
        })}
      </div>
      <div className="flex flex-wrap gap-3 mt-2">
        {PILLARS.map(pillar => (
          <div key={pillar.key} className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--color-muted)' }}>
            <div className="w-2 h-2 rounded-full" style={{ background: pillar.color }} />
            <span>{pillar.label}</span>
            <span className="font-semibold" style={{ color: 'var(--color-text)' }}>{counts[pillar.key]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
