import Button from '@/components/ui/button/Button';

interface ResultsTitleProps {
    date: Date;
}
function ResultsTitle({ date }: ResultsTitleProps) {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className='mx-auto my-6 max-w-4xl flex justify-between'>
      <h1 className='text-3xl font-bold'>Events in {humanReadableDate}</h1>
      <Button link='/events'>Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
