import { createServerClient } from "@supabase/ssr";

export const getSupabaseServerClient = () => {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll: () => {} /* code for getting all cookies*/,
        setAll: (cookiesToSet) => {} /* code for setting all cookies*/,
      },
    }
  );
};
