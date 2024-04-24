import { createTicket, getTickets } from "./(controllers)/tickets.controller";

export async function GET () {
  const tickets = await getTickets();

  return Response.json(tickets);
}

export async function POST (req: Request) {
  const { title, description, status } = await req.json();
  
  const ticket = await createTicket(title, description, status);

  return Response.json(ticket);
}
