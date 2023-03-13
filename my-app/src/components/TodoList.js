import React from 'react';

class TodoList extends React.Component {
  _input = React.createRef();

  state = {
    items: [
      "Do homework", 
      "Play Piano"
    ],
    newItem: ''
  };

  addItem = () => {
    this.setState((prevState) => ({
      items: [...prevState.items, prevState.newItem],
      newItem: ''
    }));
    this._input.current.value = '';
  };
  
  handleResetState = () => {
    this.setState({
        items: []
    })
}

  render() {
    return (
      <div>
        <h1>To Do</h1>
        <input type="text" ref={this._input} value={this.state.newItem} onChange={(e) => this.setState({ newItem: e.target.value })} />
        <button onClick={this.addItem}>Aggiungi Elemento</button>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={this.handleResetState}>Reset</button>
      </div>
    );
  }
}

export default TodoList;

