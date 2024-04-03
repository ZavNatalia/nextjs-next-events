import { IEventItem } from '@/interfaces/event-item.interface';
import Image from 'next/image';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import Button from '@/components/ui/button/Button';

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
        <li className='overflow-hidden flex rounded-2xl bg-gray-50 shadow-md gap-2
        ring-1 ring-inset ring-gray-900/5'>
            <Image src={'/' + image} alt={title} width={360} height={360} priority className='h-auto'/>
            <div className='w-full py-5 px-5 flex flex-col gap-1'>
                <h2 className='text-3xl font-bold text-gray-900 mb-4 text-left'>{title}</h2>
                <div className='flex gap-2 items-center text-gray-600 font-bold '>
                    <span className='inline-flex justify-center items-center h-7 w-7 '>
                        <DateIcon/>
                    </span>
                    <time>{humanReadableDate}</time>
                </div>
                <div className='flex gap-2 items-center text-gray-600 my-1 whitespace-pre-wrap'>
                    <span className='inline-flex justify-center items-center h-7 w-7 '>
                        <AddressIcon/>
                    </span>
                    <address>{formattedAddress}</address>
                </div>
                <div className='self-end mt-2'>
                    <Button link={exploreLink}>
                        <span className='text-md'>Explore Event</span>
                        <span className='inline-flex justify-center items-center h-6 w-5 ml-2 text-white'>
                        <ArrowRightIcon/>
                    </span>
                    </Button>
                </div>
            </div>
        </li>
    )
}