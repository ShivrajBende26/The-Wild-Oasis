import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Missing Supabase configuration. Set VITE_SUPABASE_URL and VITE_SUPABASE_KEY."
  );
}

if (supabaseKey.startsWith("sb_secret_")) {
  throw new Error(
    "A Supabase secret key cannot be used by this browser app. Use a publishable or anon key."
  );
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
