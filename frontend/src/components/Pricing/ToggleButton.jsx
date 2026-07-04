import React from 'react'

const ToggleButton = ({ planType, setPlanType }) => {
    return (
        <div className='flex justify-center mt-10 gap-4'>
            <button
                onClick={() => setPlanType("individual")}
                className={
                    planType === "individual"
                        ? "bg-blue-600 text-white py-3 px-10 rounded-3xl"
                        : " text-black py-3 px-10 rounded-3xl bg-gray-200"
                }
            >
                Individuals
            </button>
            <button
                onClick={() => setPlanType("team")}
                className={
                    planType === "team"
                        ? "bg-blue-600 text-white rounded-3xl py-3 px-10"
                        : " text-black py-3 px-10 rounded-3xl bg-gray-200"
                }
            >
               For Teams
            </button>
        </div>
    )
}

export default ToggleButton
