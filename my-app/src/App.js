import React from "react";

import Counter from './components/Counter'; 

import ClickCounter from "./components/ClickCounter";
import ClickTracker from "./components/ClickTracker";
import InteractiveWelcome from "./components/InteractiveWelcome";
import Login from "./components/Login"


class App extends React.Component {
  render() {
    return (
      <div>
       
       
       {/*<Counter initialCount={5} increment={3} interval={3000}/>*/}
       {/*<ClickCounter />*/}
       {/*<ClickTracker />*/}
       <InteractiveWelcome />
       <Login />

      </div>
    )
  }
}


export default App;
