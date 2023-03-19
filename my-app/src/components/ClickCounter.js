import React, {useState} from "react"

{/*import React from 'react'

class ClickCounter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }

        this.clickHandler = () => {
            this.setState({
                count: this.state.count + 1
            })
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.clickHandler}>Click me!</button>
            </div>
        )
    }
}

export default ClickCounter*/}



function ClickCounter({initialValue = 0}) {
    const[count, setCount] = useState(initialValue)

    const clickHandler = () => {
        setCount(count + 1);
      };

  return (
    <div>
        <h1>{count}</h1>
       <button onClick={clickHandler}>Click me</button>
      
    </div>
  )
}

export default ClickCounter





