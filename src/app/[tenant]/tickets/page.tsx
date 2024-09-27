import TicketList from "@/components/ui/TicketList";

const dummyTickets = [
  {
    id: "1",
    title: "Write Supabase Book",
    status: "Not Started",
    author: "Chayan",
  },
  {
    id: "2",
    title: "Read more Packt Books",
    status: "In_Progress",
    author: "David",
  },
  {
    id: "3",
    title: "Make videos for the YouTube Channel",
    status: "Done",
    author: "Miles",
  },
];

const TicketListPage = ({ params }) => {
  const { tenant } = params;
  return (
    <>
      <h2 className=" mt-10 mb-5">Ticket Lists</h2>
      <TicketList dummyTickets={dummyTickets} tenant={tenant} />
    </>
  );
};

export default TicketListPage;
