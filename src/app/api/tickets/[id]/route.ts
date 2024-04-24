import { NextRequest } from "next/server";
import { deleteTicket } from "../(controllers)/ticket.controller";

export async function DELETE (req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  await deleteTicket(id);

  return Response.json({ message: 'Ticket deleted' });
}