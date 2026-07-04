import React from 'react'

const PricingCard = ({ plan }) => {
    return (
        <div className={`${plan.popular ? "rounded-lg  w-full max-w-[380px] relative" : "rounded-lg  w-full relative pt-8 px-2"}`}>

            {/* Ribbon */}

            {plan.popular && (
                <div className="absoulte top-0 left-0 w-full bg-blue-600 text-white text-center py-2 text-sm">
                    Most Popular

                </div>
            )}

            <div className={`${plan.popular ? "flex flex-col items-center justify-center border-3 bg-white  border-blue-600 pt-8" : "flex flex-col items-center justify-center gap-2 pt-5 bg-white"}`}>
                <h2 className='text-xl font-bold'>{plan.title}</h2>

                <div className="flex justify-center bg-[#ffff] items-end gap-1 mt-4">
                    <h1 className="text-5xl font-bold leading-none">
                        {plan.price}
                    </h1>

                    <span className="text-base font-semibold mb-1">
                        {plan.duration}
                    </span>
                </div>


                <h1 className={`${plan.popular ? "bg-blue-600 text-white py-2 text-xl font-bold px-5 mt-4 rounded-xl" : "flex flex-col items-center justify-center bg-gray-200 px-5 rounded-lg py-1 mt-3"}`}>{plan.button}</h1>


                <div className="mt-6 space-y-4 flex flex-col items-center justify-center text-left">
                    {plan.features.map((feature, index) => (
                        <div key={index} className="flex px-6 py-5 items-start gap-2">
                            <span className="text-blue-600">✓</span>
                            <p className="text-sm text-gray-700">{feature}</p>
                        </div>
                    ))}
                </div>



            </div>


        </div>
    )
}

export default PricingCard
