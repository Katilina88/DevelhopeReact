import React from 'react'

class CounterDisplay extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
      </div>
    )
  }
}

export default CounterDisplay
