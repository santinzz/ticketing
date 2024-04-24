import { Ticket } from "@/components/Ticket";

interface TicketFromApi {
  id: number;
  title: string;
  description: string;
  status: string;
}

export default async function HomePage() {
  const tickets: TicketFromApi[] = await fetch(
    'http://localhost:3000/api/tickets'
  ).then((res) => res.json());

  return (
    <main className='p-4'>
      <ul className='grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-2'>
        {tickets.map((ticket) => (
          <Ticket {...ticket} key={ticket.id}/>
        ))}
      </ul>
    </main>
  );
}
