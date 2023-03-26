import React, {useState} from "react"


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