-- Optional persistence layer. The shipped MVP does not require Supabase.
create extension if not exists "pgcrypto";

create type public.evidence_state as enum ('verified', 'analyst', 'demo');
create type public.confidence_level as enum ('high', 'medium', 'low');

create table public.organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  home_market text,
  created_at timestamptz not null default now()
);

create table public.capability_profiles (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  capabilities text[] not null default '{}',
  target_roles text[] not null default '{}',
  public_proof text,
  updated_at timestamptz not null default now()
);

create table public.pursuits (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  agency text not null,
  synopsis text not null,
  evidence_state public.evidence_state not null default 'demo',
  confidence public.confidence_level not null default 'low',
  response_date date,
  source_checked_at timestamptz,
  created_at timestamptz not null default now()
);

create table public.sources (
  id uuid primary key default gen_random_uuid(),
  pursuit_id uuid not null references public.pursuits(id) on delete cascade,
  label text not null,
  publisher text not null,
  source_url text,
  evidence_state public.evidence_state not null,
  confidence public.confidence_level not null,
  checked_at timestamptz not null
);

create table public.watchlist_items (
  organization_id uuid not null references public.organizations(id) on delete cascade,
  pursuit_id uuid not null references public.pursuits(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (organization_id, pursuit_id)
);

alter table public.organizations enable row level security;
alter table public.capability_profiles enable row level security;
alter table public.pursuits enable row level security;
alter table public.sources enable row level security;
alter table public.watchlist_items enable row level security;

-- Public research records can be read anonymously. Writes remain denied until
-- authenticated organization membership policies are designed and reviewed.
create policy "public pursuits are readable" on public.pursuits for select using (true);
create policy "public sources are readable" on public.sources for select using (true);
