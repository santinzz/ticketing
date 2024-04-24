'use client';

import { Cross2Icon } from "@radix-ui/react-icons";

interface TicketProps {
  id: number;
  title: string;
  description: string;
  status: string;
}

function Ticket({ title, description, status, id }: TicketProps) {

  const handleClick = async () => {
    await fetch(`/api/tickets/${id}`, {
      method: 'DELETE'
    });

    window.location.reload();
  }

  return (
    <li className='bg-slate-300 text-black rounded-md p-3 relative'>
      <h3 className='font-bold text-2xl'>{title}</h3>
      <hr className='h-[2px] bg-black rounded-full' />
      <p>{description}</p>
      <p className='absolute bottom-0 right-0 rounded-md text-white px-2 rounded-b-none rounded-r-none bg-gradient-to-r from-orange-500 to-orange-700 text-sm'>
        {status}
      </p>
      <button className='absolute top-0 right-0 px-1 py-1 rounded-l-md rounded-t-none text-white bg-red-500' onClick={handleClick}>
        <Cross2Icon />
      </button>
    </li>
  );
}

export default Ticket;
