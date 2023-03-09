import React from "react";
import Welcome from './Welcome'; 
import Counter from "./Counter";



class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name = {<strong>Caterina</strong>} age= {34} />
        <Counter/>
       

      </div>
    )
  }
}


export default App;
