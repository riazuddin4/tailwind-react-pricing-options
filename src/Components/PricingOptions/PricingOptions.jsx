import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({PricingPeomise}) => {
    const pricingData = use(PricingPeomise)
    console.log(pricingData)
    return (
        <div>
            <h1>Get our Membership</h1>
            <div className='grid md:grid-cols-3 gap-8'>
                {
                    pricingData.map(pricin => <PricingCard 
                        key={pricin.id}
                        pricin={pricin}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;