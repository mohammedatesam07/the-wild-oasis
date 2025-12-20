import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dlbhpcrahsbuugvlnlkt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsYmhwY3JhaHNidXVndmxubGt0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU2Mjc2NjQsImV4cCI6MjA4MTIwMzY2NH0.n3_JebVhEU4zvjAtXuo27BDwsVWnwEgJ7K6Ri2Nf5AA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
