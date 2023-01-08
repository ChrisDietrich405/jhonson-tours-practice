import { createContext, useState, useEffect } from "react";
import { api } from "./api";
import { ITour } from "./model";

interface ContextProps {
  tours: ITour[],
  fetchTours: () => void
}

interface ToursProviderProps {
  children: React.ReactNode
}

export const TourContext = createContext<ContextProps>({} as ContextProps)

export function ToursProvider({children}: ToursProviderProps) {
    const [tours, setTours] = useState<ITour[]>([]);

  const fetchTours = async () => {
    const response = await api.get(`react-tours-project`);
    console.log(response);
    setTours(response.data);
  };

  useEffect(() => {
    fetchTours();
  }, []);
    
    return (
        <TourContext.Provider value={{tours, fetchTours}}>
          {children}
        </TourContext.Provider>
    )
}