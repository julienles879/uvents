import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = "https://gdtobzcfonlzxkqsxfmj.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkdG9iemNmb25senhrcXN4Zm1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcwNTQyMjgsImV4cCI6MjA3MjYzMDIyOH0.s-alZrQjbQmVRHe8gMlzlpoEl3nHOZxGGqkbOPZLJkw"

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)