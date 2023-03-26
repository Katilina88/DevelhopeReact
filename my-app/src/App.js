import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome1 from "./components/Welcome1";
import Counter1 from "./components/Counter1"; 
import Container from "./components/Container"; 

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Welcome1 name={"Caterina"} />} />
        <Route path="/counter1" element={<Counter1 /> } />
      </Routes>
    </ Container>
  );
}

export default App;

