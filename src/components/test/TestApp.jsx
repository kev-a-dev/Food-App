import React from "react";
import TestList from "./TestList";
import TestCart from "./TestCart";

import { TestContextProvider } from "./TestContext";

export default function TestApp() {

  return (
    <TestContextProvider>    
      <TestList/>
      <TestCart/>
    </TestContextProvider>
  )
}
