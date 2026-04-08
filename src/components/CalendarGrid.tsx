import { useMemo } from 'react';
import { getPillar, FORMATS } from '@/types';
import type { Post } from '@/types';
import {
  startOfMonth, endOfMonth, startOfWeek, endOfWeek,
  eachDayOfInterval, format, isSameMonth, isToday,
  addMonths, subMonths,
} from 'date-fns';

interface Props {
  posts: Post[];
  currentMonth: Date;
  onMonthChange: (d: Date) => void;
  onDayClick: (date: string) => void;
  onPostClick: (post: Post) => void;
}

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function CalendarGrid({ posts, currentMonth, onMonthChange, onDayClick, onPostClick }: Props) {
  const days = useMemo(() => {
    const start = startOfWeek(startOfMonth(currentMonth));
    const end = endOfWeek(endOfMonth(currentMonth));
    return eachDayOfInterval({ start, end });
  }, [currentMonth]);

  const postsByDate = useMemo(() => {
    const map: Record<string, Post[]> = {};
    posts.forEach(p => {
      const key = p.date;
      if (!map[key]) map[key] = [];
      map[key].push(p);
    });
    return map;
  }, [posts]);

  return (
    <div>
      {/* Nav */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => onMonthChange(subMonths(currentMonth, 1))}
          className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
          style={{ background: 'var(--color-card)', color: 'var(--color-text)', border: '1px solid var(--color-border)' }}
        >
          ← Prev
        </button>
        <h2 className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
          {format(currentMonth, 'MMMM yyyy')}
        </h2>
        <button
          onClick={() => onMonthChange(addMonths(currentMonth, 1))}
          className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
          style={{ background: 'var(--color-card)', color: 'var(--color-text)', border: '1px solid var(--color-border)' }}
        >
          Next →
        </button>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-px mb-px">
        {WEEKDAYS.map(d => (
          <div key={d} className="text-center text-xs font-semibold py-2" style={{ color: 'var(--color-muted)' }}>
            {d}
          </div>
        ))}
      </div>

      {/* Day cells */}
      <div className="grid grid-cols-7 gap-px rounded-xl overflow-hidden" style={{ background: 'var(--color-border)' }}>
        {days.map(day => {
          const dateKey = format(day, 'yyyy-MM-dd');
          const dayPosts = postsByDate[dateKey] || [];
          const inMonth = isSameMonth(day, currentMonth);
          const today = isToday(day);

          return (
            <div
              key={dateKey}
              onClick={() => dayPosts.length === 0 ? onDayClick(dateKey) : undefined}
              className="min-h-[90px] p-1.5 cursor-pointer transition-colors"
              style={{
                background: today ? 'rgba(232, 168, 56, 0.08)' : 'var(--color-card)',
                opacity: inMonth ? 1 : 0.3,
              }}
            >
              <div className="flex items-center justify-between mb-1">
                <span
                  className={`text-xs font-medium ${today ? 'px-1.5 py-0.5 rounded-full' : ''}`}
                  style={{
                    color: today ? 'var(--color-bg)' : 'var(--color-muted)',
                    background: today ? 'var(--color-accent)' : 'transparent',
                  }}
                >
                  {format(day, 'd')}
                </span>
              </div>
              <div className="space-y-0.5">
                {dayPosts.slice(0, 3).map(post => {
                  const pillar = getPillar(post.pillar);
                  return (
                    <div
                      key={post.id}
                      onClick={(e) => { e.stopPropagation(); onPostClick(post); }}
                      className="text-[10px] font-medium px-1.5 py-0.5 rounded truncate cursor-pointer hover:brightness-110 transition-all"
                      style={{ background: pillar.color + '22', color: pillar.color, borderLeft: `2px solid ${pillar.color}` }}
                    >
                      {FORMATS.find(f => f.key === post.format)?.icon || ""} {post.title}
                    </div>
                  );
                })}
                {dayPosts.length > 3 && (
                  <div className="text-[10px]" style={{ color: 'var(--color-muted)' }}>
                    +{dayPosts.length - 3} more
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
