"use client";

import { useRef } from "react";

import { getSupabaseBrowserClient } from "@/supabase-utils/browserClient";

const ChangePasswordPage = () => {
  const passwordRef = useRef(null);

  const supabase = getSupabaseBrowserClient();
  return (
    <>
      <form
        method="POST"
        action={""}
        className="py-5"
        onSubmit={(event) => {
          event.preventDefault();
          const value = (passwordRef.current.value || "").trim();
          alert("User wants to update password");
          supabase.auth
            .updateUser({
              password: value,
            })
            .then((result) => {
              if (!result) {
                alert("Failed to update password");
              } else {
                alert("Password updated successfully");
                passwordRef.current.value = "";
              }
            });
        }}
      >
        <article
          className="bg-gray-900/80 rounded-md"
          style={{ maxWidth: "420px", margin: "auto" }}
        >
          <header className=" bg-gray-700/20 p-5 font-bold">
            Change Password
          </header>
          <fieldset className=" py-7 px-5">
            <label htmlFor="password" className="font-bold">
              Password
              <input
                ref={passwordRef}
                className="block w-full bg-slate-950/60 text-white border  border-gray-500 rounded-sm p-3 font-light"
                type="password"
                id="password"
                name="password"
                required
              />
            </label>
          </fieldset>

          {/* button */}
          <div className="px-5 pt-2">
            <button
              className="bg-sky-500 w-full py-3 font-semibold mb-7 
            rounded-sm hover:bg-sky-400 shadow-md"
              type="submit"
            >
              Update Password
            </button>
          </div>
        </article>
      </form>
    </>
  );
};

export default ChangePasswordPage;
