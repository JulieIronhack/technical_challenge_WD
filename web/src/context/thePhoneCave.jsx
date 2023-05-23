/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import phonesServices from "../services/phones";

const ThePhoneCaveContext = createContext();

export const ThePhoneCaveProvider = ({ children }) => {
  const handlePhonesContext = async (action, id) => {
    switch (action) {
      case "ALL":
        return await phonesServices.list();

      case "DETAIL":
        return await phonesServices.detail(id);

      default:
        break;
    }
  };

  return (
    <ThePhoneCaveContext.Provider value={handlePhonesContext}>
      {children}
    </ThePhoneCaveContext.Provider>
  );
};

export const useThePhoneCaveContext = () => useContext(ThePhoneCaveContext);
