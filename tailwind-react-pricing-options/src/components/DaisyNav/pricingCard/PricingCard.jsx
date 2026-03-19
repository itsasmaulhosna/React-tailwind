import React from 'react';
import FeatureCard from './FeatureCard';

const PricingCard = ({pricing}) => {
    const {name,price,description,features}=pricing
    return (
        <div className='border p-6 bg-amber-600 rounded-2xl'>
            {/* card */}
            <div>
                <h2 className='text-2xl'>{name}</h2>
                <h3 className='text-xl'>{price}</h3>
            </div>
            {/* card-body */}
            <div className='bg-amber-300 p-4 mt-3 rounded-2xl flex-1 '>
                <p>{description}</p>
                {
                    features.map(feature=><FeatureCard feature={feature}></FeatureCard>)
                }
            </div>
            <button className="btn w-full mt-2">Subscribe</button>
        </div>
    );
};

export default PricingCard;