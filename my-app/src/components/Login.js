import React from 'react';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    remember: false
  };

  handleInputChange = (event) => {
    const { name, type, checked, value } = event.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value
    });
  };

  handleResetState = () => {
    this.setState({
      username: '',
      password: '',
      remember: false,
    });
  };

  render() {
    const { username, password } = this.state;
    const disabled = username === '' || password === '';
    const buttonStyle = {
      backgroundColor: password.length < 8 ? 'red' : 'green'
    };

    return (
      <div>
        <h1>My Login</h1>
        <form>
          <div>
            <label>Username</label>
            <input name="username" value={username} onChange={this.handleInputChange} />
          </div>
          <div>
            <label>Password</label>
            <input name="password" type="password" value={password} onChange={this.handleInputChange} />
          </div>
          <div>
            <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleInputChange} />
          </div>
          <div>
            <button type="submit" disabled={disabled} style={buttonStyle} onClick={() => this.props.onLogin(this.state)}>Login</button>
          </div>
          <div>
            <button onClick={this.handleResetState}>Reset</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
