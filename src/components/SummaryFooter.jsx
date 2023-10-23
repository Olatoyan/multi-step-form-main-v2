import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../contexts/FormContexts";

function SummaryFooter() {
  const navigate = useNavigate();

  const { dispatch } = useForm();

  function handleNextClick(e) {
    e.preventDefault();

    dispatch({ type: "setSteps", payload: 4 });
    navigate("/finished");
  }
  return (
    <div className="flex items-center justify-between mt-auto sma:absolute sma:bottom-0 sma:w-[80%]">
      <Link
        to="/addOns"
        className="text-grey text-[1.6rem] font-medium cursor-pointer hover:text-purple transition-all duration-300"
        onClick={() => navigate("/addOns")}
      >
        Go Back
      </Link>
      <Link
        className="text-white text-[1.6rem] font-medium py-6 px-10  rounded-[0.8rem] bg-purple sma:text-[1.4rem] sma:px-6 sma:py-5 hover:bg-[#928cff] transition-all duration-300"
        to={"/finished"}
        onClick={handleNextClick}
      >
        Confirm
      </Link>
    </div>
  );
}

export default SummaryFooter;
