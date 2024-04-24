import { z } from 'zod';

export const TicketSchema = z.object({
  title: z.string(),
  description: z.string(),
  status: z.enum(['in-progress', 'completed', 'canceled', 'not-started']),
});

export type Ticket = z.infer<typeof TicketSchema>;