import React from "react";

import Counter from './components/Counter'; 

import ClickCounter from "./components/ClickCounter";
import ClickTracker from "./components/ClickTracker";
import InteractiveWelcome from "./components/InteractiveWelcome";
import Login from "./components/Login"
import UncontrolledLogin from "./components/UncontrolledLogin";
import TodoList from "./components/TodoList";
import Welcome from "./components/Welcome";
import Container from "./components/Container";

class App extends React.Component {
  render() {
    return (
      <div>
        <Container>
       
       
       {/*<Counter initialCount={5} increment={3} interval={3000}/>*/}
       {/*<ClickCounter />*/}
       {/*<ClickTracker />*/}
       <InteractiveWelcome />
       <Login />
       <UncontrolledLogin />
       <TodoList />
       <Welcome />
       </Container>
      

      </div>
    )
  }
}


export default App;
