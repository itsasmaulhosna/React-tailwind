import React, { use } from 'react';
import PricingCard from '../pricingCard/pricingCard';
const Pricing = ({pricingPromise}) => {
    const pricingData= use(pricingPromise)
    console.log(pricingData)
    return (
        <div>
            <h2 className='text-5xl'>Get Our Membership</h2>
            <div className='grid md:grid-cols-3 gap-10'>
                {
                    pricingData.map(pricing=><PricingCard pricing={pricing}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default Pricing;