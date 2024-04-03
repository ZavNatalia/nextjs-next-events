import classes from './event-content.module.css';
import React from 'react';

interface EventContentProps {
  children: React.ReactNode;
}

function EventContent({children}: EventContentProps) {
  return (
    <section className={classes.content}>
      {children}
    </section>
  );
}

export default EventContent;
