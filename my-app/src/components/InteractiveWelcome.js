import React from 'react'
import Welcome from'../components/Welcome'

class InteractiveWelcome extends React.Component {
    state = {
        name: ''
    }
    handleInputChange = (event) => {
        this.setState((prevState) => ({
            name: event.target.value
        }))
    }

  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={this.handleInputChange} ></input>
        <Welcome name={this.state.name}/>
      </div>
    )
  }
}

export default InteractiveWelcome
