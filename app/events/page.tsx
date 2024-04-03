
import EventList from '@/components/events/EventList';
import { getAllEvents } from '@/dummy-data';
import EventsSearch from '@/components/events/EventsSearch';

export default function EventsPage() {
    const events = getAllEvents();
    return (
        <>
            <h2 className='text-center font-bold text-3xl my-8'>All Events Page</h2>
            <EventsSearch  />
            <EventList items={events}/>
        </>
    )
}