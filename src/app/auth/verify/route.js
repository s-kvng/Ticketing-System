import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilsClient";
import { NextResponse } from "next/server";
export async function GET(request) {
  // we extract the query parameters by accessing searchParams
  // because we parse it automatically by using the web API standard( new URL)
  // we are able to use the get method on it
  const { searchParams } = new URL(request.url);
  const hashed_token = searchParams.get("hashed_token");

  const supabase = getSupabaseCookiesUtilClient();

  //   confirm whether the hashed token is indeed a valid token
  const { error } = await supabase.auth.verifyOtp({
    type: "magiclink",
    token_hash: hashed_token,
  });

  // check if session was established successfully or not
  if (error) {
    return NextResponse.redirect(
      new URL("/error?type=invalid_magiclink", request.url)
    );
  } else {
    return NextResponse.redirect(new URL("/tickets", request.url));
  }
}
