import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";



const RatingStars = ({ rating }) => {
    return (
        <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) =>
                star <= rating ? (
                    <FaStar
                        key={star}
                        className="text-yellow-400 text-lg"
                    />
                ) : (
                    <FaRegStar
                        key={star}
                        className="text-gray-300 text-lg"
                    />
                )
            )}
        </div>
    );
};

export default RatingStars;
