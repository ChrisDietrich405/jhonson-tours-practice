import { useContext } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { api } from "./api";
import Tours from "./Tours";
import { ITour } from "./model";
import { TourContext } from "./TourContext";
//https://course-api.com/react-tours-project

function App() {
  const { tours } = useContext(TourContext);

  return (
    <div className="App">
      {tours.map((tour) => {
        return (
          <>
            <Tours tour={tour} />
          </>
        );
      })}
    </div>
  );
}

export default App;
