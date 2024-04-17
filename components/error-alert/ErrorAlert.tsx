import React, { ReactNode } from 'react';
import Button from '@/components/ui/button/Button';

interface ErrorAlertProps {
    text: string;
    icon?: ReactNode;
    buttonTitle?: string;
    buttonLink?: string;
}

export default function ErrorAlert(props: ErrorAlertProps) {
    const {text, icon, buttonTitle, buttonLink} = props;
    return (
        <div className='flex flex-col gap-6 justify-center items-center'>
            <div
                className='rounded-3xl mt-8 shadow-md bg-fuchsia-100 px-12 py-8 flex gap-3 text-gray-700 items-center'>
                {icon ?? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                              stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"/>
                </svg>
                }
                <p className='text-xl'>
                    {text}
                </p>
            </div>
            {buttonTitle && buttonLink && <Button link={buttonLink}>{buttonTitle}</Button>}
        </div>

    )
}