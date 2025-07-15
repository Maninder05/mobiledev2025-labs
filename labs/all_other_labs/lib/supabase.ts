// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://qczosyhpfpdbsvyykhiv.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjem9zeWhwZnBkYnN2eXlraGl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2MTY4MjAsImV4cCI6MjA2ODE5MjgyMH0.0XJeUvXwYgkOzjfzNaX7o3vQ5HL4Z4ZR5M2-7orOaCQ';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
