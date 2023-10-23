import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormProvider } from "./contexts/FormContexts";
import { AddOnsProvider } from "./contexts/AddOnsContext";
import { PlansProvider } from "./contexts/PlansContext";

// import Homepage from "./pages/Homepage";
// import Plans from "./pages/Plans";
// import AddOns from "./pages/AddOns";
// import Summary from "./pages/Summary";
// import Finished from "./pages/Finished";
import Spinner from "./components/Spinner";
import { Suspense, lazy } from "react";

const Homepage = lazy(() => import("./pages/Homepage"));
const Plans = lazy(() => import("./pages/Plans"));
const AddOns = lazy(() => import("./pages/AddOns"));
const Summary = lazy(() => import("./pages/Summary"));
const Finished = lazy(() => import("./pages/Finished"));

function App() {
  return (
    <div className=" bg-[#eff5ff] py-[10.5rem] mid:py-0">
      <FormProvider>
        <PlansProvider>
          {/* <Spinner /> */}
          <AddOnsProvider>
            <BrowserRouter>
              <Suspense fallback={<Spinner />}>
                <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/plans" element={<Plans />} />
                  <Route path="/addOns" element={<AddOns />} />
                  <Route path="/summary" element={<Summary />} />
                  <Route path="/finished" element={<Finished />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </AddOnsProvider>
        </PlansProvider>
      </FormProvider>
    </div>
  );
}

export default App;
