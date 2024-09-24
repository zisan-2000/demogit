import React from "react";

const PlanOption = ({
  title,
  price,
  save,
  mostPopular,
  switchBilling,
  isYearly,
  monthlySave,
  yearlySave,
  switchMonthlyBilling,
  switchYearlyBilling,
}) => {
  return (
    <div className="card">
      {mostPopular && (
        <div className="mb-2 text-sm font-semibold text-orange-500">
          MOST POPULAR
        </div>
      )}
      <h3 className="mb-6 text-3xl font-bold">{title}</h3>
      <div className="flex">
        <p className="mb-2 text-4xl font-bold text-orange-500">${price}</p>
        <p className="mb-4 ml-2 text-2xl text-gray-400">
          {isYearly ? "/ year" : "/ month"}{" "}
          {/* Conditionally render / month or / year */}
        </p>
      </div>
      <p className="text-blue-500">
        {isYearly
          ? `Save $${yearlySave} annually`
          : `Save $${monthlySave} monthly`}
      </p>
      <p className="mt-2 cursor-pointer text-orange-500 ">
        {isYearly ? `${switchYearlyBilling}` : `${switchMonthlyBilling}`}
      </p>
      <button className="card-button">Activate now</button>
    </div>
  );
};

export default PlanOption;
