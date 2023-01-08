import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { ToursProvider } from "./TourContext";
import TourItem from "./TourItem";
const RoutesFile = () => {
  return (
    <div>
      <ToursProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/tour/:id" element={<TourItem/>}/>
            {/* <Route path="/tour/:id" element={<TourItem/>}/> */}
          </Routes>
        </BrowserRouter>
      </ToursProvider>
    </div>
  );
};

export default RoutesFile;
