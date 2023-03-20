import React, {useState, useEffect} from 'react';

{/*
import CounterDisplay from './CounterDisplay';

class Counter extends React.Component {
 
   state = {
      count: this.props.initialCount
    }

    componentDidMount () {
      setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + this.props.increment
      }));
    }, this.props.interval);
  }

  render() {
    return (
    <CounterDisplay count={this.state.count}/>
    );
  }
}

export default Counter;*/}




function Counter() {
  const[count, setCount] = useState(0)

  useEffect(()=> {
    const interval = setInterval(() => {
      setCount(count + 1)
    }, 1000)

    return() => {
      clearInterval(interval)
    }
  }, [])
  
  return (
    <div>
      {count}
      
    </div>
  )
}

export default Counter

