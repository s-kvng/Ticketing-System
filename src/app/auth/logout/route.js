import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilsClient";

import { NextResponse } from "next/server";

export async function GET(request) {
  const supabase = getSupabaseCookiesUtilClient();
  await supabase.auth.signOut();
  console.log("signing out on server");
  return NextResponse.redirect(new URL("/", request.url));
}
