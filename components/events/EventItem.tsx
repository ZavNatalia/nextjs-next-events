import { IEventItem } from '@/interfaces/event-item.interface';
import Image from 'next/image';
import Link from 'next/link';
interface EventItemProps {
    event: IEventItem;
}
export default function EventItem({event}: EventItemProps) {
    const {date, location, image, title, id} = event;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;

    return (
        <li className='overflow-hidden flex m-4 rounded-2xl bg-gray-50 shadow-md gap-2
        ring-1 ring-inset ring-gray-900/5'>
            <Image src={'/' + image} alt={title} width={360} height={360} priority className={'h-auto'}/>
            <div className='w-full px-3 py-5'>
                <div>
                    <h2 className='text-4xl font-bold text-gray-900 mb-4 text-left'>{title}</h2>
                </div>
                <div className='flex gap-1 items-center text-gray-700 font-bold my-2'>
                    <time>{humanReadableDate}</time>
                </div>
                <div className='flex gap-1 items-center text-gray-700 my-1 whitespace-pre-wrap'>
                    <address>{formattedAddress}</address>
                </div>
                <Link href={exploreLink} className='items-end'>
                    Explore Event
                </Link>
            </div>
        </li>
    )
}