import Login from "@/components/form/login";

const LoginPage = ({ searchParams }) => {
  const wantMagicLink = searchParams.magicLink === "yes";

  return <Login isPasswordLogin={!wantMagicLink} />;
};

export default LoginPage;
