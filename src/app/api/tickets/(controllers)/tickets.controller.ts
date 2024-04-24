import { pool } from '@/db/db';
import { Ticket, TicketSchema } from '@/schemas/ticketSchema';

export const getTickets = async () => {
  try {
    const { rows } = await pool.query('SELECT * FROM tickets');
    return rows;
  } catch (error) {
    console.error(error);
  }
};

export const createTicket = async (
  title: string,
  description: string,
  status: Ticket['status']
) => {
  try {
    const parsedData = TicketSchema.safeParse({
      title,
      description,
      status,
    });

    if (!parsedData.success) {
      return { message: 'Invalid Fields' };
    }

    await pool.query(
      'INSERT INTO tickets (title, description, status) VALUES ($1, $2, $3)',
      [title, description, status]
    );

    const newTicket = {
      title,
      description,
      status,
    };

    return newTicket;
  } catch (error) {
    console.error(error);
    return { message: 'An error occurred' };
  }
};
