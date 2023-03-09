import React from 'react';

class Age extends React.Component {
  render() {
    const age = this.props.age;

    return (
      <div>
        {age >= 18 ? <h1>Your age is {age}</h1> : <h1>You are very young!</h1>}
      </div>
    );
  }
}

export default Age;
