import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Edit from "./Edit";
import Create from "./Create";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/edit/:_id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default React.memo(Router);
