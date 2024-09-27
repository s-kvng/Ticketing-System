import TenantName from "@/components/shared/TenantName";
import Nav from "@/components/shared/Nav";

const TicketsLayout = ({ children, params }) => {
  const { tenant } = params;
  return (
    <>
      <section>
        <TenantName tenantName={tenant} />
        <Nav tenant={tenant} />
      </section>
      <section>{children}</section>
    </>
  );
};

export default TicketsLayout;
