import React from "react";

import Counter from './Counter'; 

import ClickCounter from "./ClickCounter";



class App extends React.Component {
  render() {
    return (
      <div>
       
       
       {/*<Counter initialCount={5} increment={3} interval={3000}/>*/}
       <ClickCounter />

      </div>
    )
  }
}


export default App;
