import { createClient } from '@supabase/supabase-js';
// Bun automatically loads .env files


const supabaseUrl = process.env.PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Error: Missing environment variables.');
  console.error('Please ensure PUBLIC_SUPABASE_URL and PUBLIC_SUPABASE_ANON_KEY (or SUPABASE_SERVICE_ROLE_KEY) are set in your .env file.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function createAdmin() {
  const email = process.argv[2];
  const password = process.argv[3];

  if (!email || !password) {
    console.error('Usage: bun scripts/create-admin.ts <email> <password>');
    process.exit(1);
  }

  console.log(`Attempting to create user: ${email}`);

  // If using service role key, we can create/update directly without confirmation
  const isServiceRole = !!process.env.SUPABASE_SERVICE_ROLE_KEY;
  
  if (isServiceRole) {
      console.log('Using Service Role Key - Attempting administrative creation/update...');
      const { data, error } = await supabase.auth.admin.createUser({
        email,
        password,
        email_confirm: true
      });
      
      if (error) {
         console.error('Error creating user with admin API:', error.message);
         // If user already exists, try update
         if (error.message.includes("already registered")) {
             console.log("User already exists. Attempting to get user and update password...");
             // Only admin API has listUsers, but create is easier if we just want to reset password
             // Actually, we can't easily get ID by email without listUsers which might be paginated.
             // But we can try updateUserById if we had the ID.
             // Simpler: Just tell the user to use the dashboard if they want to update, or delete first.
         }
      } else {
          console.log('Admin user created successfully (auto-confirmed)!');
      }
  } else {
      console.log('Using Public Anon Key - detailed admin features unavailable.');
      console.log('Attempting public sign-up...');
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        console.error('Error creating user:', error.message);
      } else {
        if (data.user && !data.session) {
             console.log('User created successfully! Please check your email for a confirmation link.');
        } else if (data.user && data.session) {
             console.log('User created and logged in successfully!');
        } else {
             console.log('User creation initiated. Check dashboard/email.');
        }
      }
  }
}

createAdmin();
