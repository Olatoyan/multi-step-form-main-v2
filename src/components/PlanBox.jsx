import { usePlans } from "../contexts/PlansContext";

function PlanBox({ img, title, price }) {
  const { type, selectedPlan, dispatch } = usePlans();

  function handlePlanSelect() {
    dispatch({ type: "selectPlan", payload: { title, price } });
    dispatch({ type: "setError", payload: "" });
  }

  return (
    <div
      className={`bg-transparent border border-solid  py-8 px-6 rounded-[0.8rem] cursor-pointer hover:border-purple ${
        selectedPlan === title
          ? "border-purple bg-very-light-grey"
          : "border-border-color"
      } sma:flex sma:items-center sma:gap-[1.4rem]`}
      onClick={handlePlanSelect}
    >
      <img src={img} alt="title" className="mb-16 sma:mb-0" />
      <div className="sma:flex sma:flex-col sma:gap-1">
        <h3 className="text-denim text-[1.6rem] font-medium pb-1">{title}</h3>
        <p className="text-grey text-[1.4rem] leading-[2rem]">
          ${price}/{type === "monthly" ? "mo" : "yr"}
        </p>
      </div>
      <p className="text-[1.3rem] text-denim">{`${
        type === "yearly" ? "2 months free" : ""
      }`}</p>
    </div>
  );
}

export default PlanBox;
