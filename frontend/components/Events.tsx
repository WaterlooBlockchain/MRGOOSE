// Events.tsx
import React, { useEffect, useState } from 'react';
import Strapi from 'strapi-sdk-js';
import Link from 'next/link';

const EventCard: React.FC<{ event: any }> = ({ event }) => (
  <div className="border bg-white border-gray-200 p-4 rounded-md">
    <Link href={event.link} passHref={true}/>
      <div className="w-full h-32 object-cover mb-2">{event.name}</div>
    <h3 className="text-lg font-bold">{event.name}</h3>
  </div>
);

function Events() {
  const [events, setEvents] = useState([])
  useEffect(() => {
    async function fetchData() {
        const response = await fetch('/api/getEvent');
        const {data} = await response.json();
        setEvents(data);
    };
    fetchData();
  }, []);
  
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 text-yellow-400">Shop Merchandise</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        { events.map((event: any) => <EventCard key={event.id} event={event.attributes} />)
        }
      </div>
    </div>
  );
};

export default Events;
