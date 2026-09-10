# Cinderella Golf Club

React + Vite membership-focused website.

## Pages
- `/` Home
- `/membership` Membership application
- `/login` Member login

## Run
```bash
npm install
npm run dev
```

The form is currently frontend-only. Supabase authentication/database can be connected next.


## Supabase setup
1. Create a free Supabase project.
2. Open the Supabase SQL Editor and run `supabase-schema.sql`.
3. Copy `.env.example` to `.env.local`.
4. Put your Supabase Project URL and anon/publishable key into `.env.local`.
5. Run `npm install`.
6. Run `npm run dev`.

The membership form writes to `membership_applications`.
Login uses Supabase email/password authentication.
The `/account` route requires an authenticated Supabase user.
