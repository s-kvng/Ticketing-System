import DetailsCard from "@/components/cards/DetailsCard";

const TicketDetailsPage = ({ params }) => {
  const { id } = params;
  return (
    <div className="py-6">
      <DetailsCard />
    </div>
  );
};

export default TicketDetailsPage;
