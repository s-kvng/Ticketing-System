import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilsClient";

const TenantName = async ({ tenant }) => {
  // TODO: Implement logic to fetch and display tenant name based on provided tenant ID
  let tenantName = "Unknown";

  // instaniating a supabase client
  const supabase = getSupabaseCookiesUtilClient();

  // Fetch tenant name from your backend API or database using the provided tenant ID
  const selection = await supabase
    .from("tenants")
    .select("name")
    .eq("id", tenant)
    .single();

  const { data, error } = selection;
  console.log({ tenant, data, error });
  tenantName = data?.name ?? tenantName;

  return (
    <header style={{ marginBottom: "10px" }}>
      <div
        style={{
          borderLeft: "4px solid orange",
          display: "block",
          padding: "4px 10px",
          fontSize: "1.1em",
        }}
      >
        Ticket System
        <strong
          style={{
            marginLeft: "1ex",
          }}
        >
          {tenantName}
        </strong>
      </div>
    </header>
  );
};

export default TenantName;
