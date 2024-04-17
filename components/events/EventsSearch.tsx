"use client"
import Button from '@/components/ui/button/Button';
import { useRef } from 'react';

interface IMonth {
    title: string;
    value: number;
}

const months: IMonth[] = [
    {title: 'January', value: 1},
    {title: 'February', value: 2},
    {title: 'March', value: 3},
    {title: 'April', value: 4},
    {title: 'May', value: 5},
    {title: 'June', value: 6},
    {title: 'July', value: 7},
    {title: 'August', value: 8},
    {title: 'September', value: 9},
    {title: 'October', value: 10},
    {title: 'November', value: 11},
    {title: 'December', value: 12},
];

const years = [2023, 2024, 2025];

interface EventsSearchProps {
    onSearch: (year: number, month: number) => void;
}

function EventsSearch({onSearch}: EventsSearchProps) {
    const yearInputRef = useRef<HTMLSelectElement>(null);
    const monthInputRef = useRef<HTMLSelectElement>(null);

    function submitHandler(event: any) {
        event.preventDefault();
        const selectedYear = Number(yearInputRef?.current?.value) || years[0];
        const selectedMonth = Number(monthInputRef?.current?.value) || months[0].value;
        if (!!selectedYear && !!selectedMonth) {
            onSearch(selectedYear, selectedMonth);
        }
    }

    return (
        <form
            className='shadow-md mb-5 bg-white rounded-2xl max-w-4xl mx-auto min-w-fit flex gap-5 p-5 justify-between'
            onSubmit={submitHandler}
        >
            <div className='flex gap-5'>
                <div className='flex gap-2 items-center'>
                    <label htmlFor="year" className='font-bold'>Year</label>
                    <select
                        id="year"
                        className='bg-white border-gray-200 border-2 rounded-md px-2 py-1 w-60'
                        ref={yearInputRef}
                    >
                        {years.map(year => (<option value={year} key={year}>{year}</option>))}
                    </select>
                </div>
                <div className='flex gap-2 items-center'>
                    <label htmlFor="month" className='font-bold'>Month</label>
                    <select
                        id="month"
                        className='bg-white border-gray-200 border-2 rounded-md px-2 py-1 w-60'
                        ref={monthInputRef}
                    >
                        {months.map(({title, value}) => {
                            return (
                                <option value={value} key={value}>{title}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <Button>Find Events</Button>
        </form>
    )
}

export default EventsSearch;