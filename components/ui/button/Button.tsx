import Link from 'next/link';
import React from 'react';

interface ButtonProps {
    link: string;
    children: React.ReactNode;
}

function Button(props: ButtonProps) {
    return <Link
        href={props.link}
        className='cursor-pointer
        px-6
        py-3
        rounded-md
        flex
        w-fit
        text-center
        justify-center
        bg-emerald-500
        text-white
        shadow-md
        hover:bg-emerald-600'
    >
        {props.children}
    </Link>
}

export default Button;