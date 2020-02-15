import React from "react";
import {
  Route
} from "react-router-dom";
import {ScreenOne} from "containers/ScreenOne"

export default function Routers() {
  return (
  
          <Route path="/" component={ScreenOne} />
        
  );
}