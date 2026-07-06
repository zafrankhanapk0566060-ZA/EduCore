import React, { useState } from 'react'
import CourseHeader from './CourseHeader'
import featuredCoursesData from '../../data/featuredCoursesData'
import CourseCard from './CourseCard'
import ShowMoreButton from './ShowMoreButton'

const FeaturedCourses = () => {

    const [showAll, setShowAll] = useState(false)
    const visibleCoursesData = showAll ? featuredCoursesData : featuredCoursesData.slice(0, 3)



    return (
        <div className="max-w-7xl mx-auto px-6 py-20">
            <CourseHeader
            showAll={showAll}
            setShowAll={setShowAll}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {
                    visibleCoursesData.map((course) => (
                        <CourseCard
                            key={course.id}
                            course={course}
                        />
                    ))
                }
            </div>

            <div className="mt-10 flex justify-center">
                <ShowMoreButton
                    showAll={showAll}
                    setShowAll={setShowAll}
                />
            </div>

        </div>
    )
}

export default FeaturedCourses
