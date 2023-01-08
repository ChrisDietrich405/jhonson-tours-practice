import React from "react";
import { ITour } from "./model";
import { useNavigate } from "react-router-dom"


interface TourProps {
  tour: ITour;
}

const Tours = ({ tour }: TourProps) => {
const navigate = useNavigate()

const handleGoToPage = () => {
  navigate(`/tour/${tour.id}`)
}

  return (
    <div>
      <h1>{tour.name}</h1>
      <button onClick={handleGoToPage}>get more info</button>
    </div>
  );
};

export default Tours;


