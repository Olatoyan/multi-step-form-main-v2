import { createContext, useContext, useReducer } from "react";

const AddOnsContext = createContext();

const initialState = {
  selectedAddOns: [],
  type: "monthly",
};

function reducer(state, action) {
  switch (action.type) {
    case "toggleAddOn":
      if (
        state.selectedAddOns.map((a) => a.title).includes(action.payload.title)
      ) {
        return {
          ...state,
          selectedAddOns: state.selectedAddOns.filter(
            (addon) => addon.title !== action.payload.title
          ),
        };
      } else {
        return {
          ...state,
          selectedAddOns: [...state.selectedAddOns, action.payload],
        };
      }
    case "setType":
      const adjustedAddOns = state.selectedAddOns.map((addOn) => {
        return {
          title: addOn.title,
          price: state.type === "monthly" ? addOn.price * 10 : addOn.price / 10,
        };
      });

      return {
        ...state,
        type: state.type === "monthly" ? "yearly" : "monthly",
        selectedAddOns: adjustedAddOns,
      };
    default:
      return state;
  }
}

function AddOnsProvider({ children }) {
  const [{ selectedAddOns, type }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <AddOnsContext.Provider value={{ selectedAddOns, dispatch }}>
      {children}
    </AddOnsContext.Provider>
  );
}

function useAddOns() {
  const context = useContext(AddOnsContext);
  if (context === undefined) {
    throw new Error("useAddOns must be used within a AddOnsProvider");
  }
  return context;
}

export { AddOnsProvider, useAddOns };
