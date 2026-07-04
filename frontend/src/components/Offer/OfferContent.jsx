import React from "react";

const OfferContent = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-14 text-white">

      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10">

        <h2 className="text-3xl font-bold mb-8">
          Offer Terms & Conditions
        </h2>

        <div className="space-y-8">

          <div>
            <h3 className="text-xl font-semibold mb-3 text-blue-50">
              Eligibility
            </h3>

            <ul className="space-y-3 text-gray-200 leading-8 list-disc pl-5">
              <li>Offer valid only for new EduCore Plus subscribers.</li>
              <li>Limited to one subscription per customer.</li>
              <li>Cannot be combined with any other promotional offer.</li>
              <li>Available only during the promotional period.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-blue-50">
              Subscription Details
            </h3>

            <ul className="space-y-3 text-gray-200 leading-8 list-disc pl-5">
              <li>Save 40% on the annual EduCore Plus plan.</li>
              <li>Discount is automatically applied at checkout.</li>
              <li>Subscription renews automatically every year.</li>
              <li>You may cancel anytime before renewal.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-blue-50">
              Important Information
            </h3>

            <p className="text-gray-200 leading-8">
              This limited-time offer expires on <strong>July 13, 2026,
              11:59 PM UTC.</strong> EduCore reserves the right to modify,
              suspend, or terminate this promotion without prior notice.
              Taxes may apply depending on your country or region.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OfferContent;