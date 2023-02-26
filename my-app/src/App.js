import React from "react";
import {Welcome} from './Welcome'; 



class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name = {<strong>Caterina</strong>} age= {34} />

      </div>
    )
  }
}


export default App;
