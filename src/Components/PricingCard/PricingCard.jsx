import React from 'react';
import PricingFeature from './PricingFeature';
import DaisyuiPricing from '../daisyuiPricing/DaisyuiPricing';

const PricingCard = ({ pricin }) => {
    const { name, price, description, features } = pricin;
    return (
        <div className='flex flex-col border bg-amber-200 rounded-2xl p-4'>
            {/* card header */}
            <div>
                <h1 className="text-6xl">{name}</h1>
                <h4 className='text-3xl'>{price}</h4>
            </div>
            {/* card body */}
            <div className='bg-amber-400 p-6 mt-6 rounded-2xl flex-1'>
                <p>{description}</p>
                {
                    features.map((feature, index) => (
                        <PricingFeature 
                        key={index}
                        feature={feature}></PricingFeature>
                    ))

                }

               
            </div>
            <button className="btn w-full mt-6">Subscribe</button>
        </div>
    );
};

export default PricingCard;