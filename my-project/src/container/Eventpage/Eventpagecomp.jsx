import React, { useState } from 'react';
import EventCard from './EventCard';
import Event1photo from '../../assets/Event1photo.jpg'; // Update the relative path
import Event2photo from '../../assets/Event2photo.jpg'; // Update the relative path

const initialEvents = [
  [
    { name: 'Event 1', photo: Event1photo, detail: 'Details for event 1', venue: 'Venue 1' },
    { name: 'Event 2', photo: Event2photo, detail: 'Details for event 2', venue: 'Venue 2' },
  ],
  [
    { name: 'Event 3', photo: Event1photo, detail: 'Details for event 3', venue: 'Venue 3' },
    { name: 'Event 4', photo: Event2photo, detail: 'Details for event 4', venue: 'Venue 4' },
  ],
  // Add more arrays for additional rows with two images per row if needed
];

/**
 * The EventPage component renders a page displaying upcoming events.
 */
const EventPage = () => {
  const [showAllEvents, setShowAllEvents] = useState(false);
  const [events, setEvents] = useState(initialEvents.slice(0, 1));

  const handleShowAllEvents = () => {
    setEvents(initialEvents);
    setShowAllEvents(true);
  };

  return (
    <>
      <style>
        {`
          body {
            background-color: #e6eaf0; /* Set the background color to a muted tone */
          }
        `}
      </style>
      <h1 className="text-5xl font-fancy font-bold text-yellow-500 text-center mt-0 mb-10 underline">UPCOMING EVENTS</h1>
      <p className="text-3xl text-center mb-20 font-bold italic">Come To Our Events For More Info</p>
      <div className={`flex justify-center items-center h-screen ${showAllEvents ? 'mt-20' : ''}`}> {/* Add margin-top if all events are displayed */}
        <div className="max-w-screen-lg mx-auto px-0 mb-20 mt-10"> {/* Add max-width and horizontal padding */}
          {events.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-2 gap-80 mt-10 mb-10 ml-0 mr-80"> {/* Add margin-bottom to create gap between rows */}
              {row.map((event, index) => (
                <div key={index}>
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          ))}
          {!showAllEvents && (
            <div className="flex justify-center mb-10">
              <button
                className="bg-yellow-500 text-white py-2 px-4 rounded-md text-lg font-bold"
                onClick={handleShowAllEvents}
              >
                View All Events
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EventPage;
