import React from "react";

import Counter from './Counter'; 

import ClickCounter from "./ClickCounter";
import ClickTracker from "./ClickTracker";


class App extends React.Component {
  render() {
    return (
      <div>
       
       
       {/*<Counter initialCount={5} increment={3} interval={3000}/>*/}
       {/*<ClickCounter />*/}
       <ClickTracker />

      </div>
    )
  }
}


export default App;
