import Link from 'next/link';
import React from 'react';

interface ButtonProps {
    link?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

function Button(props: ButtonProps) {

    if (props.link) {
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
    return <button
        className='block w-fit rounded-md bg-emerald-500 px-4 py-2 text-center text-md font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600'
        onClick={props.onClick}
    >
        {props.children}
    </button>
}

export default Button;