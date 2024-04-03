import { IEventItem } from '@/interfaces/event-item.interface';
import EventItem from '@/components/events/EventItem';

interface EventListProps {
    items: IEventItem[];
}

export default function EventList({items}: EventListProps) {

    return (
        <ul className='max-w-4xl mx-auto flex flex-col gap-5'>
            {items.map((event) => (
                <EventItem event={event} key={event.id}/>
            ))}
        </ul>
    )
}