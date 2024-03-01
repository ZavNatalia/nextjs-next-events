import { getFeaturedEvents } from '@/dummy-data';
import EventList from '@/components/events/EventList';

export default function Home() {
    const featuredEvents = getFeaturedEvents();
  return (
    <main className="p-6">
        <EventList items={featuredEvents}/>
    </main>
  );
}
