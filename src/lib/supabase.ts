import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://dcawvtntsvjkbtegorzv.supabase.co' ,
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjYXd2dG50c3Zqa2J0ZWdvcnp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgwNTk2ODMsImV4cCI6MjA5MzYzNTY4M30.4USpAs8tfC6-41GHFpWXS9RfFWS7nmcXx9UGXHzCtTo'
)
