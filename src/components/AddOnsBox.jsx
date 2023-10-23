import { useAddOns } from "../contexts/AddOnsContext";
import { usePlans } from "../contexts/PlansContext";

function AddOnsBox({ id, title, text, price }) {
  const { dispatch, selectedAddOns } = useAddOns();
  const { type } = usePlans();

  const isSelected = selectedAddOns.map((a) => a.title).includes(title);

  function handleAddOnToggle() {
    dispatch({ type: "toggleAddOn", payload: { title, price } });
  }
  return (
    <label
      htmlFor={id}
      className={`flex gap-5 items-center py-7 px-10 sma:px-[1.6rem] border border-solid rounded-[0.8rem]  hover:border-purple cursor-pointer ${
        isSelected
          ? "bg-very-light-grey border-purple"
          : "bg-white border-border-color"
      }`}
    >
      <div>
        <input
          type="checkbox"
          className="add-on hidden"
          id={id}
          checked={isSelected}
          onChange={handleAddOnToggle}
        />
        <div
          className="w-8 h-8 border border-solid border-border-color "
          id="box"
        ></div>
      </div>
      <div className="flex flex-col ">
        <h3 className="text-denim text-[1.6rem] sma:text-[1.4rem] font-medium">
          {title}
        </h3>
        <p className="text-grey text-[1.4rem] sma:text-[1.2rem] leading-8">
          {text}
        </p>
      </div>
      <p className="text-[1.4rem] sma:text-[1.2rem] text-purple leading-8 ml-auto">
        ${price}/{type === "monthly" ? "mo" : "yr"}
      </p>
    </label>
  );
}

export default AddOnsBox;
