import React, { createRef } from 'react';

class UncontrolledLogin extends React.Component {
  formRef = createRef();

  componentDidMount(){
    const form = this.formRef.current; 
    form.elements.username.focus()
  }
  

  handleSubmit = (event) => {
    event.preventDefault();
    const form = this.formRef.current;
    const username = form.elements.username.value;
    const password = form.elements.password.value;
    const remember = form.elements.remember.checked;
    console.log(username, password, remember);
  };

  handlePrefill = () => {
    const form = this.formRef.current;
    form.elements.username.value = 'Caterina';
    form.elements.password.value = 'ciaociao';
    form.elements.remember.checked = true;
  };

  render() {
    return (
      <div>
        <h3>Uncontrolled Form</h3>
        <form ref={this.formRef} onSubmit={this.handleSubmit}>
          <input name="username" defaultValue="Caterina"/>
          <input name="password" type="password" defaultValue="" />
          <input name="remember" type="checkbox" defaultChecked={false} />

          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
          <button type="button" onClick={this.handlePrefill}>
            PreFill
          </button>
        </form>
      </div>
    );
  }
}

export default UncontrolledLogin;
