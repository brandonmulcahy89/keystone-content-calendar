import { STATUSES, getPillar, PLATFORMS, FORMATS } from '@/types';
import type { Post, StatusKey } from '@/types';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';
import { useDraggable, useDroppable } from '@dnd-kit/core';

interface Props {
  posts: Post[];
  onMove: (id: string, status: StatusKey) => void;
  onPostClick: (post: Post) => void;
}

function DraggableCard({ post, onClick }: { post: Post; onClick: () => void }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: post.id,
    data: { post },
  });
  const pillar = getPillar(post.pillar);

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      onClick={onClick}
      className="p-3 rounded-lg cursor-grab active:cursor-grabbing transition-all"
      style={{
        background: 'var(--color-bg)',
        border: '1px solid var(--color-border)',
        opacity: isDragging ? 0.5 : 1,
        transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
      }}
    >
      <div className="flex items-center gap-1.5 mb-1.5">
        <div className="w-2 h-2 rounded-full" style={{ background: pillar.color }} />
        <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: pillar.color }}>
          {pillar.label}
        </span>
      </div>
      <div className="text-sm font-medium mb-1" style={{ color: 'var(--color-text)' }}>
        {post.title}
      </div>
      {post.format && (<div className="text-[10px] mb-1" style={{color: (FORMATS.find(f=>f.key===post.format)||{color:"var(--color-muted)"}).color}}>{(FORMATS.find(f=>f.key===post.format)||{icon:""}).icon} {(FORMATS.find(f=>f.key===post.format)||{label:""}).label}</div>)}
      {post.date && (
        <div className="text-[10px] mb-1.5" style={{ color: 'var(--color-muted)' }}>
          {post.date}
        </div>
      )}
      <div className="flex gap-1">
        {post.platforms.map(p => {
          const plat = PLATFORMS.find(pl => pl.key === p);
          return (
            <span key={p} className="text-[10px]" title={plat?.label}>
              {plat?.icon}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function DroppableColumn({ status, children }: { status: StatusKey; children: React.ReactNode }) {
  const { setNodeRef, isOver } = useDroppable({ id: status });
  const label = STATUSES.find(s => s.key === status)?.label || status;

  return (
    <div
      ref={setNodeRef}
      className="flex-1 min-w-[200px] rounded-xl p-3 transition-colors"
      style={{
        background: isOver ? 'rgba(232, 168, 56, 0.05)' : 'var(--color-card)',
        border: `1px solid ${isOver ? 'var(--color-accent)' : 'var(--color-border)'}`,
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--color-muted)' }}>
          {label}
        </span>
      </div>
      <div className="space-y-2">
        {children}
      </div>
    </div>
  );
}

export default function KanbanBoard({ posts, onMove, onPostClick }: Props) {
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }));

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const status = over.id as StatusKey;
      if (STATUSES.some(s => s.key === status)) {
        onMove(active.id as string, status);
      }
    }
  }

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="flex gap-3 overflow-x-auto pb-4">
        {STATUSES.map(status => {
          const columnPosts = posts.filter(p => p.status === status.key);
          return (
            <DroppableColumn key={status.key} status={status.key}>
              {columnPosts.map(post => (
                <DraggableCard
                  key={post.id}
                  post={post}
                  onClick={() => onPostClick(post)}
                />
              ))}
              {columnPosts.length === 0 && (
                <div className="text-xs text-center py-6" style={{ color: 'var(--color-muted)' }}>
                  Drop here
                </div>
              )}
            </DroppableColumn>
          );
        })}
      </div>
    </DndContext>
  );
}
