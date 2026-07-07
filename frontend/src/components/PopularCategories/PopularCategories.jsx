import React from 'react'
import CategoryHeader from './CategoryHeader'
import CategoryGrid from './CategoryGrid'
import categoryData from '../../data/CategoryData'
import CategoryCard from './CategoryCard'

const PopularCategories = () => {
    return (
        <section className='bg-slate-300 py-20'>
            <div className="max-w-7xl mx-auto px-6">
                <CategoryHeader />
                <CategoryGrid />
            </div>
        </section>
    )
}

export default PopularCategories
