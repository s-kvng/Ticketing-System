import Login from "@/components/form/login";
import { FORM_TYPES } from "@/contants/formTypes";

const LoginPage = ({ searchParams }) => {
  let formType: string;
  const wantMagicLink = searchParams.magicLink === "yes";
  const wantPasswordRecovery = searchParams.recovery === "yes";

  if (wantMagicLink) {
    formType = FORM_TYPES.MAGIC_LINK;
  } else if (wantPasswordRecovery) {
    formType = FORM_TYPES.PASSWORD_RECOVERY;
  } else {
    formType = FORM_TYPES.PASSWORD_LOGIN;
  }

  return <Login isPasswordLogin={!wantMagicLink} formType={formType} />;
};

export default LoginPage;
