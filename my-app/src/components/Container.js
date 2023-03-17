import React from 'react';
import './Container.css'; 

class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>{this.props.title}</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Container;
