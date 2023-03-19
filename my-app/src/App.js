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
import FunctionSum from "./components/FunctionSum";


class App extends React.Component {
  render() {
    return (
      <div>
        <Container title="My Title">



          {/*<Counter initialCount={5} increment={3} interval={3000}/>*/}
          {/*<ClickCounter />*/}
          {/*<ClickTracker />*/}
          {/*<InteractiveWelcome />
       <Login />
       <UncontrolledLogin />
       <TodoList />*/}
    <Welcome />
    <FunctionSum numbers={[1, 2, 3, 4, 5, ]} />
       
        </Container>


      </div>
    )
  }
}


export default App;
