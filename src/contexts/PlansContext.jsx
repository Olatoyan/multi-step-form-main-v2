import { createContext, useContext, useReducer } from "react";

const PlansContext = createContext();

const initialState = {
  type: "monthly",
  selectedPlan: "",
  planPrice: "",
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "togglePlan":
      return {
        ...state,
        type: state.type === "monthly" ? "yearly" : "monthly",
        planPrice:
          state.type === "monthly"
            ? state.planPrice * 10
            : state.planPrice / 10,
      };
    case "selectPlan":
      return {
        ...state,
        selectedPlan: action.payload.title,
        planPrice: action.payload.price,
      };
    case "setError":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

function PlansProvider({ children }) {
  const [{ type, selectedPlan, error, planPrice }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <PlansContext.Provider
      value={{
        type,
        selectedPlan,
        error,
        planPrice,
        dispatch,
      }}
    >
      {children}
    </PlansContext.Provider>
  );
}

function usePlans() {
  const context = useContext(PlansContext);
  if (context === undefined) {
    throw new Error("usePlans must be used within a PlansProvider");
  }
  return context;
}

export { PlansProvider, usePlans };
