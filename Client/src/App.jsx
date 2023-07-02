import React from "react";
import { Route, Routes } from "react-router-dom";
import StreamerRecord from "./pages/StreamerRecord";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<StreamerRecord />} />
      </Routes>
    </>
  );
};

export default App;
