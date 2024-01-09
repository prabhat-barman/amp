import React from "react";
import LoginPage from "../components/LoginPage";
import { BrowserRouter, Route } from "react-router-dom";
import LoginPage1 from "../components/LoginPage1";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}>
            <Route path="/Login" element={<LoginPage1 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
};

export default Routes;
