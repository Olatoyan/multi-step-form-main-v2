import { usePlans } from "../contexts/PlansContext";
import AddOnsBox from "./AddOnsBox";
import AddOnsFooter from "./AddOnsFooter";
import FormLayout from "./FormLayout";

function AddOnsForm() {
  const { type } = usePlans();
  return (
    <FormLayout>
      <h1 className="text-[3.2rem] font-bold text-denim sma:text-[2.4rem]">
        Pick add-ons
      </h1>
      <h2 className="text-grey text-[1.6rem] leading-[2.5rem] mb-[3.5rem]">
        Add-ons help enhance your gaming experience.
      </h2>

      <div className="flex flex-col gap-[1.6rem]">
        <AddOnsBox
          title="Online service"
          text="Access to multiplayer games"
          id="online-service"
          price={`${type === "monthly" ? 1 : 10}`}
        />
        <AddOnsBox
          title="Larger storage"
          text="Extra 1TB of cloud save"
          id="larger-storage"
          price={`${type === "monthly" ? 2 : 20}`}
        />
        <AddOnsBox
          title="Customizable profile"
          text="Custom theme on your profile"
          id="customizable-profile"
          price={`${type === "monthly" ? 2 : 20}`}
        />
      </div>
      <AddOnsFooter />
    </FormLayout>
  );
}

export default AddOnsForm;
