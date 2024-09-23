import { createContext, useContext } from "react";

export const CalucalteContext = createContext({
  dispaly: "",
  ValueBack: () => {},
  ValueDisplay: () => {},
  ValueClear: () => {},
});

export default function useCalculate() {
  return useContext(CalucalteContext);
}

export const CalculateProvider = CalucalteContext.Provider;
