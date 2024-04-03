import Button from '@/components/ui/button/Button';

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
function EventsSearch() {
    return (
        <form className='shadow-md mb-5 bg-white rounded-2xl max-w-4xl mx-auto min-w-fit flex
            gap-5 p-5 justify-between
        '>
            <div className='flex gap-5'>
                <div className='flex gap-2 items-center'>
                    <label htmlFor="year" className='font-bold'>Year</label>
                    <select id="year" className='bg-white border-gray-200 border-2 rounded-md px-2 py-1 w-60'>
                        <option value="2023" >2023</option>
                        <option value="2024">2024</option>
                    </select>
                </div>
                <div className='flex gap-2 items-center'>
                    <label htmlFor="month" className='font-bold'>Month</label>
                    <select id="month" className='bg-white border-gray-200 border-2 rounded-md px-2 py-1 w-60'>
                        {months.map(({title, value}) => {
                            return (
                                <option value={value} key={value} >{title}</option>
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