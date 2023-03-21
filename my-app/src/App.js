import React from "react";
import Counter from './components/Counter'
import ClickCounter from "./components/ClickCounter";
import ClickTracker from "./components/ClickTracker";
import InteractiveWelcome from "./components/InteractiveWelcome";
import Login from "./components/Login"
import UncontrolledLogin from "./components/UncontrolledLogin";
import TodoList from "./components/TodoList";
import Welcome from "./components/Welcome";
import Container from "./components/Container";
import FunctionSum from "./components/FunctionSum";
import { LanguageContext } from "./LanguageContext";
import DisplayLanguage from "./Displaylanguage";
import GithubUser from "./components/GithubUser";
import GithubUserList from "./components/GithubUserList";
import CarDetails from "./components/CarDetails";

const carData = {
  model: 'Opel',
  year: '2023',
  color: 'blue'
}
class App extends React.Component {
  state = {
    language: 'en',
  };

 

  handleChangeLanguage = event => {
    const { value } = event.target;
    this.setState({ language: value });
  };


  render() {
    return (
      <div>
        <div>
          <select onChange={this.handleChangeLanguage} value={this.state.language}>
            <option value="en">English</option>
            <option value="it">Italian</option>
            <option value="Ger">German</option>
          </select>
          <LanguageContext.Provider value={this.state.language}>
            <DisplayLanguage />
          </LanguageContext.Provider>
        </div>

       

        <Container title="My Title">
     
         
          <CarDetails initialData={carData} />
          {/*<ClickCounter />
          <Counter initialCount={5} increment={3} interval={3000} />
          <ClickTracker />
          <InteractiveWelcome />
          <Login />
          <UncontrolledLogin />
          <TodoList
            render={(items, removeItem) => (
              <ul>
                {items.map((item, index) => (
                  <li key={index}>
                    {item}
                    <button onClick={() => removeItem(index)}>Remove</button>
                  </li>
                ))}
              </ul>
            )}
          />
          <Welcome />
                <FunctionSum />*/}
                  {/*<GithubUserList /> */}
          </Container>


      </div>
    )
  }
}


export default App;
