import React from 'react'

function FunctionSum({numbers}) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0)

  return (
    <div>
        <h1>{sum}</h1>
      
    </div>
  )
}

export default FunctionSum
