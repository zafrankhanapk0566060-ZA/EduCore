import React from 'react'
import { FaStar } from "react-icons/fa";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">

      {/* Course Image */}
      <div className="overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Card Content */}
      <div className="p-5">

        {/* University */}
        <p className="text-sm text-gray-500 font-medium">
          {course.university}
        </p>

        {/* Course Title */}
        <h2 className="text-xl font-semibold mt-2 text-gray-900 hover:text-blue-700 transition-colors duration-300">
          {course.title}
        </h2>

        {/* Level */}
        <p className="text-gray-600 text-sm mt-2">
          {course.level}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-4">

          <FaStar className="text-yellow-400" />

          <span className="font-semibold text-gray-900">
            {course.rating}
          </span>

          <span className="text-gray-500 text-sm">
            (2.4k reviews)
          </span>

        </div>

        {/* Learners */}
        <p className="text-sm text-gray-500 mt-2">
          18k learners
        </p>

      </div>

    </div>
  )
}

export default CourseCard