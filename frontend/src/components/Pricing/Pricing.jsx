import React, { useState } from 'react'
import ToggleButton from './ToggleButton'
import PricingCard from './PricingCard'
import { individualPlans, teamPlans } from '../../data/PricingData';

const Pricing = () => {

    const [planType, setPlanType] = useState("individual");
    const plans = planType === "individual" ? individualPlans : teamPlans;


    return (
        <section className='bg-[#f0f6ff] py-20'>
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center">

                    <h2 className='text-4xl font-bold'>
                        Plans for you or your team
                    </h2>
                </div>

                {/* Toggle Button */}
                <ToggleButton planType={planType} setPlanType={setPlanType} />

                {/* Pricing Cards map loop */}
                <div className={`grid gap-8 mt-12 ${planType === 'team'
                    ? "grid-col-1 place-items-center w-full "
                    : "grid grid-cols-1 lg:grid-cols-3 gap-1 mt-12"
                    }`}>
                    {
                        plans.map((plan) => (
                            <PricingCard
                                className={planType === "team" ? "col-span-3 flex justify-center items-center " : ""}
                                key={plan.id}
                                plan={plan}
                            />
                        ))
                    }

                </div>


            </div>

        </section>
    )
}

export default Pricing
