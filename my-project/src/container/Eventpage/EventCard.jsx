// EventCard.jsx
import React from 'react';

const EventCard = ({ event }) => {
  const cardStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${event.photo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '10px',
    padding: '100px',
    color: '#fff',
    width: 'calc(100% + 300px)', // Adjusted width to fill available space with reduced margins
  };

  return (
    <div className="border rounded-lg mb-10 mx-20 ml-0 mr-40" style={cardStyle}> {/* Adjusted mx-auto for horizontal margin */}
      <h2 className="text-3xl font-bold mb-2">{event.name}</h2>
      <p className="text-lg">Date: {event.date}</p>
      <p className="text-lg">Time: {event.time}</p>
      <p className="text-lg">Location: {event.location}</p>
      <p className="text-lg">{event.detail}</p>
    </div>
  );
};
export default EventCard;
