import React from "react";

import Counter from './Counter'; 



class App extends React.Component {
  render() {
    return (
      <div>
       
        <Counter initialCount={5} increment={3} interval={3000}/>
       

      </div>
    )
  }
}


export default App;
