import Link from 'next/link';

export default function EventsPage() {

    return (
        <main className="p-6">
            <h2>Events Page</h2>
            <Link href='/events/1' className="p-6">1</Link>
            <Link href='/events/2' className="p-6">2</Link>
        </main>
    )
}