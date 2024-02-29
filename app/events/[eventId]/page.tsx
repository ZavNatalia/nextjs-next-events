import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

export default function EventPage({params}: {params: Params}) {

    return (
        <main className="p-6">
            <h2 className='text-3xl font-bold underline'>Event Page {params.eventId}</h2>
        </main>
    )
}