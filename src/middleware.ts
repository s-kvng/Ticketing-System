import { NextResponse } from "next/server";
import { getSupabaseReqResClient} from "./supabase-utils/reqResClient";

export async function middleware(req){
    const res = NextResponse.next();
    const { supabase, response }  = getSupabaseReqResClient({request : req});

    // Check if user is authenticated by requesting the session , by doing that
    // also refreshes the session...
    // NB: we could use getUser() instead of getSession(), which is more secure because 
    // it retrieves trustworthy user data , unlike getSession() which does not verify
    // the data buh it is faster than getUser(). Which is needed for a middleware
    const session = await supabase.auth.getSession();

    // get the path the request was made to
    const requestedPath = req.nextUrl.pathname;
    // get the user from the session returned
    const sessionUser = session.data?.session?.user;

    // 
    const [ tenant , ...restOfPath] = requestedPath.substr(1).split("/")
    // check if the tenant value are characters that can be a tenant ID
    console.log(!/^[a-z0-9-_]+$/.test(tenant))
    if(!/^[a-z0-9-_]+$/.test(tenant)){
        console.log("Invalid")
        return NextResponse.rewrite(new URL(`${tenant}/not-found`, req.url))
       
    }
    const applicationPath = "/" + restOfPath.join("/")
    console.log(applicationPath)

    // check if the user is trying to access a protected route 
    // if the user is not authenticated then redirect them to the login page
    // else allow them to access the protected route
    // this middleware should be placed at the top of your middleware stack
    if(applicationPath.startsWith("/tickets")){
        if(!sessionUser){
            return NextResponse.redirect(new URL(`/${tenant}`, req.url))
        }
    }else if(applicationPath === "/"){
        if(sessionUser){
            return NextResponse.redirect(new URL(`${tenant}/tickets`, req.url))
        }
    }


    return response.value
}

// this matcher tells the middleware to avoid some static files eg. /favicon.ico 
// so no to slow down your application
export const config = {
    matcher: ["/((?!.*\\.).*)"],
  }