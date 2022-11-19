import { useState } from "react";
import { createContext } from "react";

export const CoordsContext = createContext();

export function CoordsContextProvider({ children }) {
  const [coords, setCoords] = useState({ lat: 0, lng: 0 });
  return <CoordsContext.Provider value={{ coords, setCoords }}>{children}</CoordsContext.Provider>;
}
