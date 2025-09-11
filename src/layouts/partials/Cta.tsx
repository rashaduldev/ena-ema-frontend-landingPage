import Link from 'next/link';
import React from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { PiLightning } from 'react-icons/pi';

const Cta = () => {
    return (
       <section className='bg-black pb-12'>
             <div className='container'>
                <div className='flex items-center gap-3'>
                    <PiLightning className='w-9 h-9 text-primary' />
            <div>
                <p className='text-2xl tracking-[-1px] font-bold mb-2'>Limited Availability</p>
            <p>We only onboard 5 new clients per month. 2 spots left for this month — secure yours today.</p>
            </div>
                </div>
            <div className='mt-12 py-12 border border-border text-center rounded-2xl bg-dark'>
                <h2 className='text-2xl md:text-3xl lg:text-5xl mb-2 font-medium tracking-[-2px]'>Special Offer For Early Clients</h2>
                <p>Get 10% OFF + Free Hosting Setup when you book this week.</p>
                <Link
                href="/"
                className="btn btn-primary w-fit mx-auto mt-15"
                >
                Claim my 10% discount
                <IoArrowForwardOutline />
                </Link>
            </div>
        </div>
       </section>
    );
};

export default Cta;