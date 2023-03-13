import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      newItem: ''
    };
  }

  addItem = () => {
    this.setState({
      items: [...this.state.items, this.state.newItem],
      newItem: ''
    });
  };

  render() {
    return (
      <div>
        <h1>To Do</h1>
      
        <input type="text" value={this.state.newItem} onChange={(e) => this.setState({ newItem: e.target.value })} />
        <button onClick={this.addItem}>Aggiungi Elemento</button>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
