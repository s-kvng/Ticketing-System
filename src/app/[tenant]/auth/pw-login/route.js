import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilsClient";
import { NextResponse } from "next/server";

import { builderUrl } from "@/utils/url-helpers";

export async function POST(request, { params }) {
  const { tenant } = params;
  // getting the data from the form
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  // initializing the supabase instance
  const supabase = getSupabaseCookiesUtilClient();

  //
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  //   get user information
  const userData = data?.user;
  console.log(" inside login server-> ", userData);
  if (error || !userData || !userData.app_metadata?.tenants.includes(tenant)) {
    return NextResponse.redirect(
      builderUrl("/error?type=login-failed", tenant, request),
      { status: 302 }
    );
  }

  //   construct a new url from the previous requested url and redirect to that url
  return NextResponse.redirect(builderUrl("/tickets", tenant, request), {
    status: 302,
  });
}
