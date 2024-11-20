import React, { useState, useEffect } from "react";
import { getEventByCategory } from "../../../hotel-backend/api/eventAPIs";

const EventsByCategory = () => {
    const [pastEvents, setPastEvents] = useState([]);
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null); // State to hold the selected event
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const data = await getEventByCategory();
                setPastEvents(data.pastEvent || []);
                setUpcomingEvents(data.upcomingEvent || []);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchEvents();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    const renderEventCard = (event) => (
        <div
            key={event._id}
            className="border rounded-md shadow-md overflow-hidden bg-white cursor-pointer"
            onClick={() => setSelectedEvent(event)} // Set the selected event when clicked
        >
            <div className="w-full h-64">
                {event.images?.length > 0 ? (
                    <img
                        src={`http://localhost:5000${event.images[0]}`} // Display the first image
                        alt={event.title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
                        No Image Available
                    </div>
                )}
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-sm text-gray-600">
                    {new Date(event.time).toLocaleString()}
                </p>
                <p className="mt-2 line-clamp-2">{event.description}</p>
            </div>
        </div>
    );

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">Events</h1>

            <div>
                <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {upcomingEvents.length ? (
                        upcomingEvents.map((event) => renderEventCard(event))
                    ) : (
                        <p>No upcoming events found</p>
                    )}
                </div>
            </div>

            <div>
                <h2 className="text-xl font-semibold mt-8 mb-4">Past Events</h2>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {pastEvents.length ? (
                        pastEvents.map((event) => renderEventCard(event))
                    ) : (
                        <p>No past events found</p>
                    )}
                </div>
            </div>

            {/* Popup Modal */}
            {selectedEvent && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                            onClick={() => setSelectedEvent(null)} // Close the popup
                        >
                            ✕
                        </button>

                        {/* Event Details */}
                        <h2 className="text-2xl font-bold mb-4">{selectedEvent.title}</h2>
                        <p className="text-sm text-gray-600 mb-4">
                            {new Date(selectedEvent.time).toLocaleString()}
                        </p>
                        <p className="mb-4">{selectedEvent.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {selectedEvent.images?.map((image, index) => (
                                <img
                                    key={index}
                                    src={`http://localhost:5000${image}`}
                                    alt={`Event ${index + 1}`}
                                    className="w-32 h-32 object-cover rounded-md"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventsByCategory;
