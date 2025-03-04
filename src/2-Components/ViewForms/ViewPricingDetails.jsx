import React from "react";

const ViewPricingDetails = ({ film, season, pricingData, pricingSD, pricingHD, pricingFHD, pricingUHD }) => {
  return (
    <div className="flex flex-col h-full w-full gap-5 max-w-[1000px]">
      {/** Season SD Pricing */}
      <div className="flex items-center gap-10">
        <div className="flex flex-col gap-[7px] min-w-[150px]">
          <h1 className="font-[Inter-SemiBold] text-base sm:text-lg text-whites-40">
            SD Pricing
          </h1>
          <p className="font-[Inter-Regular] text-base text-[#706E72]">
           {pricingData?.currency} {pricingSD?.price ?? "N/A"}
          </p>
        </div>
      </div>

      {/** Season HD Pricing */}
      <div className="flex items-center gap-10">
        <div className="flex flex-col gap-[7px] min-w-[150px]">
          <h1 className="font-[Inter-SemiBold] text-base sm:text-lg text-whites-40">
            HD Pricing
          </h1>
          <p className="font-[Inter-Regular] text-base text-[#706E72]">
            {pricingData?.currency} {pricingHD?.price ?? "N/A"}
            
          </p>
        </div>
      </div>

      {/** Season full HD Pricing */}
      <div className="flex items-center gap-10">
        <div className="flex flex-col gap-[7px] min-w-[150px]">
          <h1 className="font-[Inter-SemiBold] text-base sm:text-lg text-whites-40">
            Full HD Pricing
          </h1>
          <p className="font-[Inter-Regular] text-base text-[#706E72]">
            {pricingData?.currency} {pricingFHD?.price ?? "N/A"}
            
          </p>
        </div>
      </div>

      {/** Season Ultra HD Pricing */}
      <div className="flex items-center gap-10">
        <div className="flex flex-col gap-[7px] min-w-[150px]">
          <h1 className="font-[Inter-SemiBold] text-base sm:text-lg text-whites-40">
            Ultra HD Pricing
          </h1>
          <p className="font-[Inter-Regular] text-base text-[#706E72]">
            {pricingData?.currency} {pricingUHD?.price ?? "N/A"}
           
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewPricingDetails;
