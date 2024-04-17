'use client'
import EventList from '@/components/events/EventList';
import { getAllEvents } from '@/dummy-data';
import EventsSearch from '@/components/events/EventsSearch';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export default function EventsPage() {
    const router = useRouter();
    const events = getAllEvents();

    const findEventsHandler = useCallback((year: number, month: number) => {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }
, [router]);

    return (
        <>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList items={events}/>
        </>
    )
}