import React from 'react';

class Login extends React.Component {
    state = {
        username: '',
        password: '',
        remember: false
    }

    handleInputChange = event => {
        const value = event.target.value
        const name = event.target.name
        const type = event.target.type
        const checked = event.target.checked

        this.setState({
            [name] : type === 'checked' ? checked : value,
        })

    }

  
  render() {
    return (
      <div>
        <h1>My Login</h1>
        <form>
            <div>
                <label>Username</label>
                <input name="username" value={this.state.username} onChange={this.handleInputChange} />
            </div>
            <div>
                <label>Password</label>
                <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
            </div>
        <div>
            <input name ="remember" type="checkbox" checked={this.state.remember} onChange={this.handleInputChange} />
        </div>
       
        </form>
        
      </div>
    )
  }
}

export default Login
