import Login from "@/components/form/login";

const LoginPage = ({ searchParams }) => {
  let formType: string;
  const wantMagicLink = searchParams.magicLink === "yes";

  return <Login isPasswordLogin={!wantMagicLink} />;
};

export default LoginPage;
