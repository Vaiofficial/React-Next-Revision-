"use client";
import React, { children, createContext } from "react";
export const MyContext = createContext();

const Context = ({ children }) => {
  const username = "vaibhav talks";
  return (
    <div>
      <MyContext.Provider value={username}>{children}</MyContext.Provider>
    </div>
  );
};

export default Context;
