import React from "react";

const CompanyLogo = ({ company }) => {
    return (
        <div
            className="
      w-32
      flex
      justify-center
      items-center
      grayscale
      opacity-70
      hover:grayscale-0
      hover:opacity-100
      hover:scale-110
      transition-all
      duration-300
      cursor-pointer
      "
        >
            <img
                src={company.image}
                alt={company.name}
                className="max-h-16 object-contain"
            />
        </div>
    );
};

export default CompanyLogo;