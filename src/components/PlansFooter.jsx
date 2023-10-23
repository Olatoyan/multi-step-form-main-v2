import { Link, useNavigate } from "react-router-dom";
import { usePlans } from "../contexts/PlansContext";
import { useForm } from "../contexts/FormContexts";

function PlansFooter() {
  const navigate = useNavigate();
  const { selectedPlan, dispatch } = usePlans();
  const { dispatch: formDispatch } = useForm();

  function handleNextClick(e) {
    e.preventDefault();

    if (!selectedPlan) {
      dispatch({ type: "setError", payload: "Please select a plan" });
    } else {
      formDispatch({ type: "setSteps", payload: 3 });
      navigate("/addOns");
    }
  }

  return (
    <div className="sma:absolute sma:bottom-0 mt-auto sma:w-[80%]">
      <div className="flex items-center justify-between  ">
        <Link
          to={"/"}
          className="text-grey text-[1.6rem] font-medium cursor-pointer hover:text-purple transition-all duration-300"
          onClick={() => navigate("/")}
        >
          Go Back
        </Link>
        <Link
          className="text-white text-[1.6rem] font-medium py-6 px-10  rounded-[0.8rem] bg-denim sma:text-[1.4rem] sma:px-6 sma:py-5 "
          to={"/addOns"}
          onClick={handleNextClick}
        >
          Next Step
        </Link>
      </div>
    </div>
  );
}

export default PlansFooter;
