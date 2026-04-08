import { TEMPLATES } from '@/lib/templates';
import { getPillar, PLATFORMS } from '@/types';
import type { CaptionTemplate } from '@/types';

interface Props {
  onUseTemplate: (template: CaptionTemplate) => void;
}

export default function TemplateLibrary({ onUseTemplate }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {TEMPLATES.map(template => {
        const pillar = getPillar(template.pillar);
        return (
          <div
            key={template.id}
            className="rounded-xl p-4 transition-all hover:scale-[1.01]"
            style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: pillar.color }} />
              <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: pillar.color }}>
                {pillar.label}
              </span>
            </div>
            <h3 className="text-sm font-bold mb-2" style={{ color: 'var(--color-text)' }}>
              {template.title}
            </h3>
            <div
              className="text-xs mb-3 max-h-32 overflow-y-auto whitespace-pre-wrap leading-relaxed"
              style={{ color: 'var(--color-muted)' }}
            >
              {template.caption}
            </div>
            <div className="flex items-center gap-1.5 mb-2">
              {template.platforms.map(p => {
                const plat = PLATFORMS.find(pl => pl.key === p);
                return (
                  <span key={p} className="text-[10px] px-1.5 py-0.5 rounded" style={{ background: 'var(--color-bg)', color: 'var(--color-muted)' }}>
                    {plat?.icon} {plat?.label}
                  </span>
                );
              })}
            </div>
            <div className="text-[10px] italic mb-3" style={{ color: 'var(--color-muted)' }}>
              💡 {template.strategy}
            </div>
            <button
              onClick={() => onUseTemplate(template)}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg w-full"
              style={{ background: pillar.color + '22', color: pillar.color, border: `1px solid ${pillar.color}44` }}
            >
              Use Template
            </button>
          </div>
        );
      })}
    </div>
  );
}
