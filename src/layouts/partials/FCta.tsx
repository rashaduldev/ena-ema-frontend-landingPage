import Form from '@/components/Form';
import React from 'react';

const FCta = () => {
    return (
        <section className='py-20'>
            <div className='container text-center'>
                <h2 className='max-w-[960px] text-7xl mx-auto md:tracking-[-3px]'>Ready to Turn Visitors Into <span className='text-primary'>Real Customers?</span></h2>
                <p className='text-lg mt-1'>Do not settle for an average page. Get a premium, conversion-focused <br /> landing page that pays for itself.</p>
                <div className='max-w-[794px] mx-auto mt-10'>
                    <Form />
                </div>
            </div>
        </section>
    );
};

export default FCta;