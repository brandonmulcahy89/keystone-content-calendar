export type PillarKey = 'before_after' | 'design_tips' | 'process' | 'client_story' | 'offer' | 'trend';
export type StatusKey = 'idea' | 'drafted' | 'approved' | 'scheduled' | 'published';
export type PlatformKey = 'instagram' | 'facebook' | 'tiktok' | 'pinterest' | 'google_business';
export type FormatKey = 'reel' | 'story' | 'post' | 'carousel';

export interface Post {
  id: string;
  created_at: string;
  title: string;
  date: string;
  pillar: PillarKey;
  status: StatusKey;
  platforms: PlatformKey[];
  caption: string;
  notes: string;
  format: FormatKey;
  user_id?: string;
}

export const FORMATS: { key: FormatKey; label: string; icon: string; color: string }[] = [
  { key: 'reel', label: 'Reel', icon: '🎬', color: '#E8538A' },
  { key: 'story', label: 'Story', icon: '⭕', color: '#C77DFF' },
  { key: 'post', label: 'Post', icon: '🖼️', color: '#4CC9F0' },
  { key: 'carousel', label: 'Carousel', icon: '📚', color: '#72EFDD' },
];

export interface Pillar {
  key: PillarKey;
  label: string;
  color: string;
  emoji: string;
}

export interface CaptionTemplate {
  id: string;
  pillar: PillarKey;
  title: string;
  caption: string;
  platforms: PlatformKey[];
  strategy: string;
}

export const PILLARS: Pillar[] = [
  { key: 'before_after', label: 'Before/After', color: '#E8A838', emoji: '✨' },
  { key: 'design_tips', label: 'Design Tips', color: '#5B9BD5', emoji: '💡' },
  { key: 'process', label: 'Our Process', color: '#8B6F47', emoji: '🔨' },
  { key: 'client_story', label: 'Client Story', color: '#6AAF6A', emoji: '💬' },
  { key: 'offer', label: 'Offer/CTA', color: '#D95555', emoji: '🎯' },
  { key: 'trend', label: 'Trend/Inspo', color: '#9B72CF', emoji: '🔮' },
];

export const STATUSES: { key: StatusKey; label: string }[] = [
  { key: 'idea', label: 'Idea' },
  { key: 'drafted', label: 'Drafted' },
  { key: 'approved', label: 'Approved' },
  { key: 'scheduled', label: 'Scheduled' },
  { key: 'published', label: 'Published' },
];

export const PLATFORMS: { key: PlatformKey; label: string; icon: string }[] = [
  { key: 'instagram', label: 'Instagram', icon: '📸' },
  { key: 'facebook', label: 'Facebook', icon: '👤' },
  { key: 'tiktok', label: 'TikTok', icon: '🎵' },
  { key: 'pinterest', label: 'Pinterest', icon: '📌' },
  { key: 'google_business', label: 'Google Business', icon: '📍' },
];

export function getPillar(key: PillarKey): Pillar {
  return PILLARS.find(p => p.key === key) || PILLARS[0];
}
