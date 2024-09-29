import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilsClient";
import { builderUrl } from "@/utils/url-helpers";

import { NextResponse } from "next/server";

// Route Handler to handle signing out users from the server
// Sign out user on server-side and redirect to the home page.
export async function GET(request, { params }) {
  const { tenant } = params;
  const supabase = getSupabaseCookiesUtilClient();
  await supabase.auth.signOut();
  console.log("signing out on server");
  return NextResponse.redirect(builderUrl("/", tenant, request));
}
