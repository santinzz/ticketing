import { pool } from "@/db/db";

export const deleteTicket = async (id: string) => {
  const numberId = Number(id);

  try {
    await pool.query('DELETE FROM tickets WHERE id = $1', [numberId]);
  } catch (error) {
    console.error(error);
  }
}