import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const FeatureCard = ({feature}) => {
    return (
        <p className='flex gap-4'><CircleCheckBig className='mr-2'></CircleCheckBig>{feature}</p>
    );
};

export default FeatureCard;