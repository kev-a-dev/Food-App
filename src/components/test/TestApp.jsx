import React from "react";
// import TestList from "./TestList";
// import TestCart from "./TestCart";
import TestCartList from "./TestCartList";
import TestSearch from './TestSearch';

import { TestContextProvider } from "./TestContext";

export default function TestApp() {

  return (
    <TestContextProvider>    
      {/* <TestList/>
      <TestCart/> */}
      <TestSearch/>
      <div>
        <TestCartList/>
      </div>
    </TestContextProvider>
  )
}
