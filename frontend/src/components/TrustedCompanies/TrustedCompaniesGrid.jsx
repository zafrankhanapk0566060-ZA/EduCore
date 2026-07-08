import React from "react";
import companyLogoData from "../../data/companyLogoData";
import CompanyLogo from "./CompanyLogo";

const TrustedCompaniesGrid = () => {
    return (
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-x-12 gap-y-10">

            {companyLogoData.map((company) => (
                <CompanyLogo
                    key={company.id}
                    company={company}
                />
            ))}

        </div>
    );
};

export default TrustedCompaniesGrid;