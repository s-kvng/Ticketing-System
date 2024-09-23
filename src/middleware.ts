import { getSupabaseReqResClient} from "./supabase-utils/reqResClient";

export async function middleware(request){
    const { supabase, response }  = getSupabaseReqResClient({request});

    // Check if user is authenticated by requesting the session , by doing that
    // also refreshes the session...
    await supabase.auth.getSession();

    return response.value
}

// this matcher tells the middleware to avoid some static files eg. /favicon.ico 
// so no to slow down your application
export const config = {
    matcher: ["/((?!.*\\.).*)"],
  }