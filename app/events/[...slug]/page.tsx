"use client"
import { useParams } from 'next/navigation'
import { getFilteredEvents } from '@/dummy-data';
import { IEventItem } from '@/interfaces/event-item.interface';
import EventList from '@/components/events/EventList';
import ResultsTitle from '@/components/events/ResultsTitle';
import ErrorAlert from '@/components/error-alert/ErrorAlert';

function FilteredEventsPage() {
    const params = useParams<{ slug: string[] }>()
    const filterData = params?.slug;

    if (!filterData) {
        return (
            <p className='text-center mt-10 text-blue-950'>
                Loading...
            </p>
        )
    }

    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;


    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2020 || numMonth < 1 || numMonth > 12) {
        return (
            <ErrorAlert
                text='Invalid filter. Please adjust your values.'
                icon={<svg
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                    stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"/>
                </svg>}
                buttonTitle='Show All Events'
                buttonLink='/events'
            />
        )
    }

    const filteredEvents: IEventItem[] = getFilteredEvents({
        year: numYear,
        month: numMonth
    });

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <ErrorAlert
                text='No events found for the chosen filter!'
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                           stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/>
                </svg>}
                buttonTitle='Show All Events'
                buttonLink='/events'
            />
        )
    }

    const date = new Date(numYear, numMonth - 1);

    return (
        <div className=''>
            <ResultsTitle date={date}/>
            <EventList items={filteredEvents}/>
        </div>
    )
}

export default FilteredEventsPage;