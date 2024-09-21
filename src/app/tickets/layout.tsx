import TenantName from "@/components/shared/TenantName";
import Nav from "@/components/shared/Nav";

const TicketsLayout = ({ children }) => {
  return (
    <>
      <section>
        <TenantName tenantName={"Packt"} />
        <Nav />
      </section>
      <section>{children}</section>
    </>
  );
};

export default TicketsLayout;
