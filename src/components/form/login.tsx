"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { getSupabaseBrowserClient } from "@/supabase-utils/browserClient";
import { FORM_TYPES } from "@/contants/formTypes";

const Login = ({ isPasswordLogin, formType = "pw-login" }) => {
  const router = useRouter();
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const supabase = getSupabaseBrowserClient();

  // checks to change state of form
  isPasswordLogin = formType === FORM_TYPES.PASSWORD_LOGIN;
  const isPasswordRecovery = formType === FORM_TYPES.PASSWORD_RECOVERY;
  const isMagicLinkLogin = formType === FORM_TYPES.MAGIC_LINK;

  useEffect(() => {
    // listen for sign in events from the server(supabase)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        router.push("/tickets");
      }
    });

    // end subscription event
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <form
      method="POST"
      action={isPasswordLogin ? "/auth/pw-login" : "/auth/magic-link"}
      className="py-5"
      onSubmit={(event) => {
        {
          isPasswordLogin && event.preventDefault();
        }
        if (isPasswordLogin) {
          alert("User wants to login with password");
          supabase.auth
            .signInWithPassword({
              email: emailInputRef.current.value,
              password: passwordInputRef.current.value,
            })
            .then((result) => {
              if (!result.data?.user) {
                alert("Failed to Sign In");
              }
            });
        } else {
          alert("User wants to login with magic link");
        }
      }}
    >
      <article
        className="bg-gray-900/80 rounded-md"
        style={{ maxWidth: "420px", margin: "auto" }}
      >
        <header className=" bg-gray-700/20 p-5 font-bold">
          {isPasswordLogin
            ? "Login"
            : isMagicLinkLogin
            ? "Magic Link Login"
            : "Password Recovery"}
        </header>
        <fieldset className=" py-7 px-5">
          {isPasswordRecovery && (
            <input type="hidden" name="type" value="recovery" />
          )}
          <label htmlFor="email" className="font-semibold">
            Email
            <input
              ref={emailInputRef}
              className="block w-full bg-slate-950/60 text-white 
              border  border-gray-500 rounded-sm p-3 mb-3 font-light "
              type="email"
              id="email"
              name="email"
              required
            />
          </label>
          {isPasswordLogin && (
            <label htmlFor="password" className="font-bold">
              Password
              <input
                ref={passwordInputRef}
                className="block w-full bg-slate-950/60 text-white border  border-gray-500 rounded-sm p-3 font-light"
                type="password"
                id="password"
                name="password"
                required
              />
            </label>
          )}
        </fieldset>

        {/* link */}
        <div className=" flex justify-between items-center">
          <p className="px-5 text-blue-600">
            {isPasswordLogin ? (
              <Link
                href={{
                  pathname: "/",
                  query: { magicLink: "yes" },
                }}
              >
                Go to Magic Link Login
              </Link>
            ) : (
              <Link
                href={{
                  pathname: "/",
                  query: { magicLink: "no" },
                }}
              >
                Go to Password Login
              </Link>
            )}
          </p>
          <p className="px-5 text-blue-600">
            {!isPasswordRecovery && (
              <Link
                href={{
                  pathname: "/",
                  query: { recovery: "yes" },
                }}
              >
                Forgot Password
              </Link>
            )}
          </p>
        </div>

        {/* button */}
        <div className="px-5 pt-2">
          <button
            className="bg-sky-500 w-full py-3 font-semibold mb-7 
            rounded-sm hover:bg-sky-400 shadow-md"
            type="submit"
          >
            {(isPasswordLogin || isMagicLinkLogin) && "Sign in with"}
            {isPasswordLogin
              ? " Password"
              : isMagicLinkLogin
              ? " Magic Link"
              : " Recover Password"}
          </button>
        </div>
      </article>
    </form>
  );
};

export default Login;
