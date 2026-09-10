-- Cinderella Golf Club membership application + member profile
create table if not exists public.membership_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  title text,
  family_name text not null,
  given_name text not null,
  middle_name text,
  email text not null,
  date_of_birth date not null,
  address text not null,
  mobile_no text not null,
  company_affiliation text,
  industry text,
  endorsed_by text not null,
  status text not null default 'Pending'
    check (status in ('Pending', 'Under Review', 'Approved', 'Declined'))
);

alter table public.membership_applications enable row level security;

-- Public applicants may submit an application.
create policy "public can submit membership applications"
on public.membership_applications
for insert
to anon, authenticated
with check (true);

-- Do not expose submitted applications to the public.
-- Staff/admin review should be implemented with a protected server-side workflow
-- or a Supabase service-role environment, not an anon SELECT policy.

-- Optional member profile table for later:
create table if not exists public.member_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  family_name text,
  given_name text,
  membership_no text unique
);

alter table public.member_profiles enable row level security;

create policy "members can view their own profile"
on public.member_profiles
for select
to authenticated
using (id = auth.uid());

create policy "members can update their own profile"
on public.member_profiles
for update
to authenticated
using (id = auth.uid())
with check (id = auth.uid());
