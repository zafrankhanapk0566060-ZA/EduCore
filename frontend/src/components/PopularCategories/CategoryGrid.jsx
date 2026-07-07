import React from 'react'
import categoryData from '../../data/CategoryData.js'
import CategoryCard from './CategoryCard'

const CategoryGrid = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>

            {categoryData?.map((categoryData) => (
                <CategoryCard
                    key={categoryData.id}
                    categoryData={categoryData}
                />
            ))}

        </div>
    )
}

export default CategoryGrid
