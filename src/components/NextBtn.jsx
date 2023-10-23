import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../contexts/FormContexts";

function NextBtn() {
  const navigate = useNavigate();
  const { name, email, phone, dispatch } = useForm();

  function handleNextClick(e) {
    e.preventDefault();
    let isValid = true;
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!name.trim()) {
      dispatch({ type: "setNameError", payload: "This field is required" });
      isValid = false;
    } else {
      dispatch({ type: "setNameError", payload: "" });
    }

    if (!phone) {
      dispatch({ type: "setPhoneError", payload: "This field is required" });
      isValid = false;
    } else if (phone.length < 7) {
      dispatch({ type: "setPhoneError", payload: "This field is required" });
    } else {
      dispatch({ type: "setPhoneError", payload: "" });
    }

    if (!emailPattern.test(email)) {
      dispatch({ type: "setEmailError", payload: "This field is required" });
      isValid = false;
    } else {
      dispatch({ type: "setEmailError", payload: "" });
    }

    if (isValid) {
      dispatch({ type: "setSteps", payload: 2 });
      navigate("/plans");
    }
  }

  return (
    <div className="self-end mt-[8.2rem] sma:absolute sma:bottom-0 sma:bg-white">
      <Link
        className="text-[1.6rem]  font-medium text-white py-6 px-10  rounded-[0.8rem] bg-denim sma:text-[1.4rem] sma:px-6 sma:py-5 "
        onClick={handleNextClick}
        to={"/plans"}
      >
        Next Step
      </Link>
    </div>
  );
}

export default NextBtn;
