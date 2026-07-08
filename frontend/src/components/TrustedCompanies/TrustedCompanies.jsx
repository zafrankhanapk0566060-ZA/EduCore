import React from 'react'
import TrustedCompaniesHeader from './TrustedCompaniesHeader'
import TrustedCompaniesGrid from './TrustedCompaniesGrid';




const TrustedCompanies = () => {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-6">

                <TrustedCompaniesHeader />

                <TrustedCompaniesGrid />

            </div>
        </section>
    );
};

export default TrustedCompanies;
