import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyuiPricing from '../daisyuiPricing/DaisyuiPricing';

const PricingOptions = ({PricingPeomise}) => {
    const pricingData = use(PricingPeomise)
    // console.log(pricingData)
    return (
        <div>
            <h1>Get our Membership</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {/* {
                    pricingData.map(pricin => <PricingCard 
                        key={pricin.id}
                        pricin={pricin}></PricingCard>)
                } */}

                {
                    pricingData.map(pricing => <DaisyuiPricing key={pricing.id} pricing={pricing}></DaisyuiPricing>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;