import React, { useState } from "react";
import Counter from './components/Counter';
import ClickCounter from "./components/ClickCounter";
import ClickTracker from "./components/ClickTracker";
import InteractiveWelcome from "./components/InteractiveWelcome";
import Login from "./components/Login";
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
};

function App() {
  const [language, setLanguage] = useState('en');

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div>
      <div>
        <select onChange={handleChangeLanguage} value={language}>
          <option value="en">English</option>
          <option value="it">Italian</option>
          <option value="Ger">German</option>
        </select>
        <LanguageContext.Provider value={language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
      </div>

     {/* <Container title="My Title">
        <CarDetails initialData={carData} />
        <ClickCounter />
        <Counter initialCount={5} increment={3} interval={3000} />
        <ClickTracker />
        <InteractiveWelcome />
        <Login />
        <UncontrolledLogin />
        <TodoList>
          {(items, removeItem) => (
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  {item}
                  <button onClick={() => removeItem(index)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
        </TodoList>
        <Welcome />
        <FunctionSum />
        <GithubUserList />
              </Container>*/}
    </div>
  );
}

export default App;
