import Login from "@/components/form/login";
import { FORM_TYPES } from "@/contants/formTypes";
import { getSupabaseAdminClient } from "@/supabase-utils/adminClient";
import { notFound } from "next/navigation";

const LoginPage = async ({ searchParams, params }) => {
  const { tenant } = params;

  // instantiate the admin supabase client
  const supabaseAdmin = getSupabaseAdminClient();

  // check the tenant table to check the tenant provided in the url is a valid tenant in the database
  // the single forces supabase to return at least one value or if no match is found return an error
  const { data, error } = await supabaseAdmin
    .from("tenants")
    .select("*")
    .eq("id", tenant)
    .single();

  // check for an error
  if (error) {
    notFound();
  }

  console.log("Data->", data);
  const { name: tenantName } = data;

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

  return <Login tenantName={tenantName} tenant={tenant} formType={formType} />;
};

export default LoginPage;
