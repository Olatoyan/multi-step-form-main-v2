import { useAddOns } from "../contexts/AddOnsContext";
import { usePlans } from "../contexts/PlansContext";

function SelectPlan() {
  const { type, dispatch } = usePlans();
  const { dispatch: AddOnsDispatch } = useAddOns();

  const handleTogglePlan = () => {
    dispatch({ type: "togglePlan" });
    AddOnsDispatch({ type: "setType", payload: type });
  };

  return (
    <div className="bg-very-light-grey rounded-[0.8rem]  mt-[3.2rem] sma:mt-[2.4rem] py-5 flex justify-center items-center gap-[2.4rem]">
      <span
        className={`${
          type === "monthly" ? "text-denim" : "text-grey"
        } text-[1.4rem] font-bold`}
      >
        Monthly
      </span>
      <div className="flex items-center theme-box">
        <input
          type="checkbox"
          id="check"
          className="select__plan"
          checked={type === "yearly"}
          onChange={handleTogglePlan}
        />
        <label
          htmlFor="check"
          className="block w-[3.8rem] h-8 bg-white rounded-3xl relative before:absolute before:content-['']  before:w-7 before:h-6 before:rounded-full before:m-[0.35rem] cursor-pointer hover:before:bg-light-violet"
        ></label>
      </div>
      <span
        className={`${
          type === "yearly" ? "text-denim" : "text-grey"
        } text-[1.4rem] font-bold`}
      >
        Yearly
      </span>
    </div>
  );
}

export default SelectPlan;
