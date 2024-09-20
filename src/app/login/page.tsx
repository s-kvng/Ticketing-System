import Login from "@/components/form/login";
import React from "react";

const LoginPage = ({ searchParams }) => {
  const wantMagicLink = searchParams.magicLink === "yes";

  return <Login isPasswordLogin={!wantMagicLink} />;
};

export default LoginPage;
