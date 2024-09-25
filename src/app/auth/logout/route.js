import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilsClient";

import { NextResponse } from "next/server";

// Route Handler to handle signing out users from the server
// Sign out user on server-side and redirect to the home page.
export async function GET(request) {
  const supabase = getSupabaseCookiesUtilClient();
  await supabase.auth.signOut();
  console.log("signing out on server");
  return NextResponse.redirect(new URL("/", request.url));
}
