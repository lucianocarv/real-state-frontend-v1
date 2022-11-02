import { useState } from "react";
import { createContext } from "react";

export const CoordsContext = createContext();

export function CoordsContextProvider({ children }) {
  const [coords, setCoords] = useState({ lat: 51.04461928842359, lng: -114.07270970833136 });
  return <CoordsContext.Provider value={{ coords, setCoords }}>{children}</CoordsContext.Provider>;
}
