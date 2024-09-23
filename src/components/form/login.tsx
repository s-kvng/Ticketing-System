"use client";

import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { getSupabaseBrowserClient } from "@/supabase-utils/browserClient";

const Login = ({ isPasswordLogin }) => {
  const router = useRouter();
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const supabase = getSupabaseBrowserClient();

  return (
    <form
      className="py-5"
      onSubmit={(event) => {
        event.preventDefault();
        if (isPasswordLogin) {
          alert("User wants to login with password");
          supabase.auth
            .signInWithPassword({
              email: emailInputRef.current.value,
              password: passwordInputRef.current.value,
            })
            .then((result) => {
              if (result.data?.user) {
                router.push("/tickets");
              } else {
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
        <header className=" bg-gray-700/20 p-5 font-bold">Login</header>
        <fieldset className=" py-7 px-5">
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
        <p className="px-5 text-blue-600">
          {isPasswordLogin ? (
            <Link
              href={{
                pathname: "/login",
                query: { magicLink: "yes" },
              }}
            >
              Go to Magic Link Login
            </Link>
          ) : (
            <Link
              href={{
                pathname: "/login",
                query: { magicLink: "no" },
              }}
            >
              Go to Password Login
            </Link>
          )}
        </p>

        {/* button */}
        <div className="px-5 pt-2">
          <button
            className="bg-sky-500 w-full py-3 font-semibold mb-7 
            rounded-sm hover:bg-sky-400 shadow-md"
            type="submit"
          >
            Sign in with
            {isPasswordLogin ? " Password" : " Magic Link"}
          </button>
        </div>
      </article>
    </form>
  );
};

export default Login;
