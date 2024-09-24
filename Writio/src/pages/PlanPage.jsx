import React, { useState } from "react";
import { billingOptions, planOptions } from "../Data/Data";
import BillingToggle from "../components/BillingToggle";
import PlanOption from "../components/PlanOption";
import TrialInfo from "./../components/TrialInfo";

const PlanPage = () => {
  const [isYearly, setIsYearly] = useState(true); // State to manage billing type

  return (
    <div className="all-content">
      {/* Trial Info */}
      <div>
        <TrialInfo
          trialPlan={billingOptions.trialPlan}
          trialDaysLeft={billingOptions.trialDaysLeft}
        />
      </div>

      {/* Billing Toggle */}
      <div>
        <BillingToggle isYearly={isYearly} setIsYearly={setIsYearly} />
      </div>

      {/* Plan Options */}
      <div className="plan-card justify-center">
        {planOptions.map((plan, index) => (
          <PlanOption
            key={index}
            title={plan.title}
            price={isYearly ? plan.yearlyPrice : plan.monthlyPrice} // Dynamic price
            monthlySave={plan.monthlySave} // Pass monthlySave
            yearlySave={plan.yearlySave} // Pass yearlySave
            switchMonthlyBilling={plan.switchMonthlyBilling}
            switchYearlyBilling={plan.switchYearlyBilling}
            mostPopular={plan.mostPopular}
            switchBilling={plan.switchBilling}
            isYearly={isYearly} // Pass isYearly prop to conditionally render / month or / year
          />
        ))}
      </div>
    </div>
  );
};

export default PlanPage;
