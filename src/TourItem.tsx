import React, {useContext} from 'react'
import { useParams } from "react-router-dom"
import { TourContext } from './TourContext'

const TourItem = () => {
  const { tours } = useContext(TourContext)

  const { id } = useParams()

  const selectedTour = tours.find((tour) => tour.id === id)

  return (
    <div>
      <p>{selectedTour?.name}</p>
    </div>
  )
}

export default TourItem