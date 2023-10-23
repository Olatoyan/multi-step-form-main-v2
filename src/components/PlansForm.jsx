import FormLayout from "./FormLayout";
import PlanBox from "./PlanBox";
import Arcade from "/icon-arcade.svg";
import Advanced from "/icon-advanced.svg";
import Pro from "/icon-pro.svg";
import SelectPlan from "./SelectPlan";
import { usePlans } from "../contexts/PlansContext";
import PlansFooter from "./PlansFooter";

function PlansForm() {
  const { type, selectedPlan, error } = usePlans();

  return (
    <FormLayout>
      <h1 className="text-[3.2rem] font-bold text-denim sma:text-[2.4rem]">
        Select your plan
      </h1>
      <h2 className="text-grey text-[1.6rem] leading-[2.5rem] mb-[3.5rem]">
        You have the option of monthly or yearly billing.
      </h2>
      <div className="grid grid-cols-3 gap-[1.8rem] sma:grid-cols-1">
        <PlanBox
          img={Arcade}
          title="Arcade"
          price={`${type === "monthly" ? 9 : 90}`}
          selected={selectedPlan === "Arcade"}
          // onSelect={() => handlePlanSelect("Arcade")}
        />
        <PlanBox
          img={Advanced}
          title="Advanced"
          price={`${type === "monthly" ? 12 : 120}`}
          selected={selectedPlan === "Advanced"}
          // onSelect={() => handlePlanSelect("Advanced")}
        />
        <PlanBox
          img={Pro}
          title="Pro"
          price={`${type === "monthly" ? 15 : 150}`}
          selected={selectedPlan === "Pro"}
          // onSelect={() => handlePlanSelect("Pro")}
        />
      </div>
      <p className="text-[#ee374a] text-[1.4rem] font-bold text-center pt-8">
        {error}
      </p>
      <SelectPlan />
      <PlansFooter />
    </FormLayout>
  );
}

export default PlansForm;
