import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CategoryHeader = () => {
    return (
        <div className="flex items-center justify-between mb-12">
            {/* Left Side */}
            <div>
                <h2 className="text-4xl font-bold text-gray-900">
                    Browse Top Categories
                </h2>

                <p className="mt-3 text-gray-600">
                    Explore our most popular course categories and find the perfect
                    learning path for your career.
                </p>
            </div>

            {/* Right Side */}
            <button className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition">
                View All
                <FaArrowRight className="text-sm" />
            </button>
        </div>
    );
};

export default CategoryHeader;