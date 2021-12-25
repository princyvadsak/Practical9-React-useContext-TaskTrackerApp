import React, { createContext, useReducer } from "react";
import AppReducer from "../context/appReducer.js";
const initialState = {
  tasks: [
    {
      id: 1,
      text: "Doctor Appointment",
      day: "feb 5th at 2:30pm",
      reminder: true
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "feb 6th at 1:30pm",
      reminder: true
    },
    {
      id: 3,
      text: "Food shopping",
      day: "feb 5th at 2:30pm",
      reminder: false
    }
  ]
};

//Create Context

export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
