import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome1 from "./components/Welcome1"




function App() {
  return (
    <div>
    
                <Routes>
                    <Route path='/' element={<Welcome1 name={'Caterina'}/>}/>
                </Routes>
            </div >
   
  )
}

export default App
