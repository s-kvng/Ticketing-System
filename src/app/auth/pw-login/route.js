import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilsClient";
import { NextResponse } from "next/server";

export async function POST(request) {
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
  if (error || !userData) {
    return NextResponse.redirect(
      new URL("/error?type=login-failed", request.url),
      { status: 302 }
    );
  }

  //   construct a new url from the previous requested url and redirect to that url
  return NextResponse.redirect(new URL("/tickets", request.url), {
    status: 302,
  });
}
