"use client"
import { getEventById } from '@/dummy-data';
import EventSummary from '@/components/event-detail/event-summary';
import EventLogistics from '@/components/event-detail/event-logistics';
import EventContent from '@/components/event-detail/event-content';
import { IEventItem } from '@/interfaces/event-item.interface';
import ErrorAlert from '@/components/error-alert/ErrorAlert';


type Props = {
    params: {
        eventId: string;
    };
};
export default function EventDetailPage({params}: Props) {
    const eventId = params.eventId;

    const event: IEventItem | undefined = getEventById(eventId);

    if (!event) {
        return <ErrorAlert text='No event found!' buttonTitle='Return to the main page' buttonLink='/'/>
    }

    return (
        <>
            <EventSummary title={event.title}/>
            <EventLogistics event={event}/>
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </>
    )
}