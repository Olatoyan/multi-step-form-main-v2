import { Link, useNavigate } from "react-router-dom";
import { usePlans } from "../contexts/PlansContext";
import FormLayout from "./FormLayout";
import { useAddOns } from "../contexts/AddOnsContext";
import SummaryFooter from "./SummaryFooter";
import { useForm } from "../contexts/FormContexts";

function SummaryForm() {
  const { selectedPlan, type, planPrice } = usePlans();
  const { selectedAddOns } = useAddOns();
  const { dispatch } = useForm();

  const navigate = useNavigate();
  const totalAddOnPrice = selectedAddOns.reduce((total, addOn) => {
    return total + Number(addOn.price);
  }, 0);

  const totalPrice = Number(planPrice) + totalAddOnPrice;

  return (
    <FormLayout>
      <h1 className="text-[3.2rem] sma:text-[2.4rem] font-bold text-denim">
        Finishing up
      </h1>
      <p className="text-grey text-[1.6rem] leading-[2.5rem] mb-[3.5rem]">
        Double-check everything looks OK before confirming.
      </p>
      <div className="bg-very-light-grey rounded-[0.8rem] py-[1.6rem] px-[2.4rem]">
        <div className="flex justify-between items-center border-b border-grey pb-10 border-opacity-20">
          <div>
            <h3 className="text-[1.6rem] sma:text-[1.4rem] font-medium text-denim">
              {selectedPlan} ({type})
            </h3>
            <Link
              to="/plans"
              className="text-[1.4rem] text-grey leading-8 underline hover:text-purple"
              onClick={() => {
                dispatch({ type: "setSteps", payload: 2 });
                navigate("/plans");
              }}
            >
              Change
            </Link>
          </div>
          <p className="text-[1.6rem] sma:text-[1.4rem] text-denim font-bold leading-8">
            ${planPrice}/{type === "monthly" ? "mo" : "yr"}
          </p>
        </div>
        <div className="">
          {selectedAddOns.map((addOn) => (
            <div key={addOn.title} className="flex justify-between mt-6">
              <h3 className="text-[1.4rem] text-grey leading-8 ">
                {addOn.title}
              </h3>
              <p className="text-[1.4rem] text-denim leading-8 ">
                +${addOn.price}/{type === "monthly" ? "mo" : "yr"}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between px-[2.4rem] pt-[2.5rem]">
        <p className="text-[1.4rem] text-grey leading-8">
          Total (per {type === "monthly" ? "month" : "year"})
        </p>
        <p className="text-purple text-[2rem] sma:text-[1.6rem] leading-8 font-bold">
          +{totalPrice}/{type === "monthly" ? "mo" : "yr"}
        </p>
      </div>
      <SummaryFooter />
    </FormLayout>
  );
}

export default SummaryForm;
