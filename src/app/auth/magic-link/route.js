import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilsClient";
import { NextResponse } from "next/server";

export async function POST(request) {
  // getting the data from the form
  const formData = await request.formData();
  const email = formData.get("email");

  // initializing the supabase instance
  const supabase = getSupabaseCookiesUtilClient();

  // send a one time password link to the email provided
  const { data, error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: false,
    },
  });

  if (error) {
    return NextResponse.redirect(
      new URL("/error?type=magiclink", request.url),
      { status: 302 }
    );
  }

  const thanksUrl = new URL("/magic-thanks", request.url);
  return NextResponse.redirect(thanksUrl, { status: 302 });
}
