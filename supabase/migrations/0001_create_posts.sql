create table if not exists public.posts (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  title text not null,
  date date,
  pillar text not null default 'before_after',
  status text not null default 'idea',
  platforms text[] default '{}',
  caption text default '',
  notes text default '',
  user_id uuid references auth.users(id)
);

alter table public.posts enable row level security;

create policy "Users can view their own posts"
  on public.posts for select
  using (auth.uid() = user_id);

create policy "Users can create posts"
  on public.posts for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own posts"
  on public.posts for update
  using (auth.uid() = user_id);

create policy "Users can delete their own posts"
  on public.posts for delete
  using (auth.uid() = user_id);
